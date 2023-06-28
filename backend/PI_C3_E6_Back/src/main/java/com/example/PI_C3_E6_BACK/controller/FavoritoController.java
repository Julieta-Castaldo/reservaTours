package com.example.PI_C3_E6_BACK.controller;

import com.example.PI_C3_E6_BACK.exceptions.ResourceNotFoundException;
import com.example.PI_C3_E6_BACK.model.FavoritoDTO;
import com.example.PI_C3_E6_BACK.model.TourDTO;
import com.example.PI_C3_E6_BACK.service.CiudadService;
import com.example.PI_C3_E6_BACK.service.FavoritoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Favoritos")
public class FavoritoController {

    @Autowired
    private FavoritoService favoritoService;

    @PostMapping("/actualizar")
    public ResponseEntity<String> createUpdateFavoritos (@RequestBody FavoritoDTO fav){
        if (fav.getListaFavoritos() != null && fav.getIdUsuario() > 0){
            return favoritoService.createUpdateFavoritos(fav);
        }else{
            return ResponseEntity.badRequest().body("Alguno de los datos proporcionados es incorrecto");
        }
    }
    @GetMapping("/porUsuario/{usuarioId}")
    @ResponseBody
    public  ResponseEntity<List<TourDTO>> buscarToursFavoritosPorUsuario (@PathVariable int usuarioId) throws ResourceNotFoundException {
        try {
            List<TourDTO> ListaTourDTO = favoritoService.buscarToursFavoritosPorUsuario(usuarioId);
            return ResponseEntity.ok(ListaTourDTO);
        }catch (Exception ex){
            throw new ResourceNotFoundException(ex.getMessage());
        }
    }

}
