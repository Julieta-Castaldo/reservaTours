package com.example.PI_C3_E6_BACK.controller;


import com.example.PI_C3_E6_BACK.exceptions.ResourceNotFoundException;
import com.example.PI_C3_E6_BACK.model.FechaOcupadaDTO;
import com.example.PI_C3_E6_BACK.model.RequestTourDTO;
import com.example.PI_C3_E6_BACK.model.TourDTO;
import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.PageResponseDTO;
import com.example.PI_C3_E6_BACK.service.TourService;
import jakarta.annotation.security.PermitAll;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.time.LocalDate;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("Tour")
@CrossOrigin(origins = "*")
public class TourController implements IController<TourDTO>{
    @Autowired
    private TourService tourService;


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

    @GetMapping("/porCiudad/{ciudadId}")
    @ResponseBody
    public  ResponseEntity<List<TourDTO>> buscarPorCiudad (@PathVariable int ciudadId) throws ResourceNotFoundException {
        try {
            List<TourDTO> ListaTourDTO = tourService.buscarTourPorCiudad(ciudadId);
            return ResponseEntity.ok(ListaTourDTO);
        }catch (Exception ex){
            throw new ResourceNotFoundException(ex.getMessage());
        }
    }

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

    @PostMapping("/agregar")
    public ResponseEntity<String> crearTour(@RequestBody RequestTourDTO t){
        int duracion = t.getDuracion();

        if(t.getNombre() != null) {
            if (duracion >= 2) {
                        try {
                            ResponseEntity response = tourService.agregarTour(t);
                            return response;
                        } catch (Exception ex) {
                            return ResponseEntity.badRequest().body(ex.getMessage());
                        }
            } else {
                return ResponseEntity.badRequest().body("No se pudo crear el tour ya que tiene que haber una diferencia de al menos dos días entre la fecha de salida y la de entrada");
            }
        }else{
            return ResponseEntity.badRequest().body("No se pudo crear el tour ya que falta ingresar el nombre del mismo");
        }
    }


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

    @GetMapping("/pages")
    public PageResponseDTO<TourDTO> getPaginatedTours(@RequestParam(defaultValue = "1") int page,
                                                      @RequestParam(defaultValue = "10") int size,
                                                      @RequestParam(required = false) Integer categoryId){
        Pageable pageable =  PageRequest.of(page - 1, size);
        PageResponseDTO<TourDTO> tourPage = tourService.buscarTodosPaginado(pageable);
        if (categoryId != null){
            tourPage = tourService.buscarPorCategoriaPaginado(pageable,categoryId );
        }
        return tourPage;
    }

    @PutMapping("/update/categoria")
    public ResponseEntity<String> actualizarCategoriaTour(
            @RequestParam() int tourId,
            @RequestParam() int categoriaId) {

        ResponseEntity<String> response;

        try {
            response = tourService.actualizarCategoriaTour(tourId, categoriaId);
        } catch (Exception e) {
            response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Ocurrió un error al actualizar la categoría del tour.");
        }

        return response;
    }

    //Get para traer los tours con determinada fecha disponible
    @GetMapping("/fechas-disponibles")
    public ResponseEntity<List<TourDTO>> buscarToursPorFechaDisponible(@RequestParam("fecha") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fecha) {
        List<TourDTO> toursDisponibles = tourService.buscarToursPorFechaDisponible(fecha);

        if (toursDisponibles.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(toursDisponibles);
    }

    //Get para traer todas las fechas ocupadas que tenga un Tour
    @GetMapping("/fechas-ocupadas-por-tour/{tourId}")
    @ResponseBody
    public ResponseEntity<List<FechaOcupadaDTO>> buscarFechasOcupadasPorTour (@PathVariable int tourId) throws ResourceNotFoundException {
        try {
            List<FechaOcupadaDTO> ListaFechaOcupadaDTO = tourService.buscarFechasOcupadasPorTour(tourId);
            return ResponseEntity.ok(ListaFechaOcupadaDTO);
        }catch (Exception ex){
            throw new ResourceNotFoundException(ex.getMessage());
        }
    }


}
