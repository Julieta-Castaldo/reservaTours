package com.example.PI_C3_E6_BACK.controller;

import com.example.PI_C3_E6_BACK.exceptions.ResourceNotFoundException;
import com.example.PI_C3_E6_BACK.model.CategoriaDTO;
import com.example.PI_C3_E6_BACK.model.CiudadDTO;
import com.example.PI_C3_E6_BACK.model.TourDTO;
import com.example.PI_C3_E6_BACK.service.CategoriaService;
import com.example.PI_C3_E6_BACK.service.TourService;
import jakarta.annotation.security.PermitAll;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.util.List;

@RestController
@RequestMapping("Categoria")
@CrossOrigin(origins = "*")
public class CategoriaController implements IController<CategoriaDTO>{

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping("/todos")
    @ResponseBody
    public ResponseEntity<List<CategoriaDTO>> buscarTodos () throws ResourceNotFoundException {
        try {
            List<CategoriaDTO> listaCategoriaDTO = categoriaService.buscarTodos();
            return ResponseEntity.ok(listaCategoriaDTO);
        }catch (Exception ex){
            throw new ResourceNotFoundException(ex.getMessage());
        }
    }

    @PostMapping("/agregar")
    public ResponseEntity<String> crearCategoria(@RequestBody CategoriaDTO c){
        if(c.getNombreCategoria() != null) {
            try {
                ResponseEntity response = categoriaService.agregarCategoria(c);
                return response;
            } catch (Exception ex) {
                return ResponseEntity.badRequest().body(ex.getMessage());
            }
        }else{
            return ResponseEntity.badRequest().body("No se pudo crear la categoría ya que falta ingresar el nombre de la misma");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> borrarPorId(@PathVariable int id) {
        try {
            ResponseEntity response = categoriaService.borrarCategoria(id);
            return response;
        } catch (Exception ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }
}
