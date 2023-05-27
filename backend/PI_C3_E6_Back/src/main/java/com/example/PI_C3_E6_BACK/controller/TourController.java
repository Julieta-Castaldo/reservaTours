package com.example.PI_C3_E6_BACK.controller;


import com.example.PI_C3_E6_BACK.exceptions.ResourceNotFoundException;
import com.example.PI_C3_E6_BACK.model.TourDTO;
import com.example.PI_C3_E6_BACK.service.TourService;
import jakarta.annotation.security.PermitAll;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("Tour")
@CrossOrigin(origins = "*")
public class TourController implements IController<TourDTO>{
    @Autowired
    private TourService tourService;

    @PermitAll
    @GetMapping("/porId/{id}")
    @ResponseBody
    public ResponseEntity<TourDTO> buscarPorId (@PathVariable int id) throws ResourceNotFoundException {
        try {
            TourDTO tourDTO = tourService.buscarPorId(id);
            return ResponseEntity.ok(tourDTO);
        }catch (Exception ex){
            throw new ResourceNotFoundException(ex.getMessage());
        }
    }
    @PermitAll
    @GetMapping("/todos")
    @ResponseBody
    public  ResponseEntity<List<TourDTO>> buscarTodos () throws ResourceNotFoundException {
        try {
            List<TourDTO> ListaTourDTO = tourService.buscarTodos();
            return ResponseEntity.ok(ListaTourDTO);
        }catch (Exception ex){
            throw new ResourceNotFoundException(ex.getMessage());
        }
    }
    @PermitAll
    @GetMapping("/porCategoria/{categoriaId}")
    @ResponseBody
    public  ResponseEntity<List<TourDTO>> buscarPorCategoria (@PathVariable int categoriaId) throws ResourceNotFoundException {
        try {
            List<TourDTO> ListaTourDTO = tourService.buscarPorCategoria(categoriaId);
            return ResponseEntity.ok(ListaTourDTO);
        }catch (Exception ex){
            throw new ResourceNotFoundException(ex.getMessage());
        }
    }
    @PermitAll
    @GetMapping("/todosAleatorio")
    @ResponseBody
    public ResponseEntity<List<TourDTO>> buscarTodosAleatorio() throws ResourceNotFoundException {
        try {
            List<TourDTO> ListaTourDTO = tourService.buscarTodos();

            // Barajar aleatoriamente la lista
            Collections.shuffle(ListaTourDTO);
            List<TourDTO> primeros10 = ListaTourDTO.subList(0, Math.min(ListaTourDTO.size(), 10));

            return ResponseEntity.ok(primeros10);
        } catch (Exception ex) {
            throw new ResourceNotFoundException(ex.getMessage());
        }
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/agregar")
    public ResponseEntity<String> crearTour(@RequestBody TourDTO t){
        Duration duracion = Duration.between(t.getFechaSalida().atStartOfDay(), t.getFechaLlegada().atStartOfDay());
        long diferenciaDias = duracion.toDays();
        if(t.getNombre() != null) {
            if (diferenciaDias >= 2) {
                if (t.getFechaLlegada() != null) {
                    if (t.getFechaSalida() != null) {
                        try {
                            ResponseEntity response = tourService.agregarTour(t);
                            return response;
                        } catch (Exception ex) {
                            return ResponseEntity.badRequest().body(ex.getMessage());
                        }
                    } else {
                        return ResponseEntity.badRequest().body("No se pudo crear el tour ya que falta ingresar fecha de salida");
                    }
                } else {
                    return ResponseEntity.badRequest().body("No se pudo crear el tour ya que falta ingresar fecha de llegada");
                }
            } else {
                return ResponseEntity.badRequest().body("No se pudo crear el tour ya que tiene que haber una diferencia de al menos dos días entre la fecha de salida y la de entrada");
            }
        }else{
            return ResponseEntity.badRequest().body("No se pudo crear el tour ya que falta ingresar el nombre del mismo");
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> borrarPorId(@PathVariable int id){
        try{
            tourService.borrarPorId(id);
        }catch (Exception ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
        return ResponseEntity.ok("Se borró el tour con éxito");
    }


    //Paginado de tours
    @PermitAll
    @GetMapping("/pages")
    public List<TourDTO> getPaginatedTours(@RequestParam(defaultValue = "1") int page,
                                           @RequestParam(defaultValue = "10") int size,
                                           @RequestParam(required = false) Integer categoryId){
        Pageable pageable =  PageRequest.of(page - 1, size);
        List<TourDTO> tourPage = tourService.buscarTodosPaginado(pageable);
        if (categoryId != null){
            tourPage = tourService.buscarPorCategoriaPaginado(pageable,categoryId );
        }
        return tourPage;
    }

}
