package com.example.PI_C3_E6_BACK.controller;


import com.example.PI_C3_E6_BACK.exceptions.ResourceNotFoundException;
import com.example.PI_C3_E6_BACK.model.TourDTO;
import com.example.PI_C3_E6_BACK.service.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.util.List;

@RestController
@RequestMapping("Tour")
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

    @GetMapping("/porCategoria/{categoria}")
    @ResponseBody
    public  ResponseEntity<List<TourDTO>> buscarPorCategoria (@PathVariable String categoria) throws ResourceNotFoundException {
        try {
            List<TourDTO> ListaTourDTO = tourService.buscarPorCategoria(categoria);
            return ResponseEntity.ok(ListaTourDTO);
        }catch (Exception ex){
            throw new ResourceNotFoundException(ex.getMessage());
        }
    }
    @PostMapping("/agregar")
    public ResponseEntity<String> crearTour(@RequestBody TourDTO t){
        Duration duracion = Duration.between(t.getFechaSalida().atStartOfDay(), t.getFechaLlegada().atStartOfDay());
        long diferenciaDias = duracion.toDays();
        if(t.getNombre() != null && diferenciaDias >= 2 && t.getFechaLlegada()!= null
                && t.getFechaSalida() != null){
            try {
                tourService.agregarTour(t);
            }catch (Exception ex) {
                return ResponseEntity.badRequest().body(ex.getMessage());
            }
        return ResponseEntity.ok("El tour fue creado con éxito");
    }else{
        return ResponseEntity.badRequest().body("No se pudo crear el tour. Verificar los datos ingresados");
    }
    }
}
