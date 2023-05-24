package com.example.PI_C3_E6_BACK.controller;

import com.example.PI_C3_E6_BACK.exceptions.ResourceNotFoundException;
import com.example.PI_C3_E6_BACK.model.CategoriaDTO;
import com.example.PI_C3_E6_BACK.model.TourDTO;
import com.example.PI_C3_E6_BACK.service.CategoriaService;
import com.example.PI_C3_E6_BACK.service.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}
