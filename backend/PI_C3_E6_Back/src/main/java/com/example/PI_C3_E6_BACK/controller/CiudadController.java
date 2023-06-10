package com.example.PI_C3_E6_BACK.controller;

import com.example.PI_C3_E6_BACK.exceptions.ResourceNotFoundException;
import com.example.PI_C3_E6_BACK.model.CategoriaDTO;
import com.example.PI_C3_E6_BACK.model.CiudadDTO;
import com.example.PI_C3_E6_BACK.model.TourDTO;
import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.PageResponseDTO;
import com.example.PI_C3_E6_BACK.service.CategoriaService;
import com.example.PI_C3_E6_BACK.service.CiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("Ciudades")
public class CiudadController {

    @Autowired
    private CiudadService ciudadService;
    @PostMapping("/agregar")
    public ResponseEntity<String> crearCiudad(@RequestBody CiudadDTO c){
        if(c.getNombreCiudad() != null && ciudadService.buscarPorCoordenadas(c.getLatitud(), c.getLongitud()) == null) {
            try {
                ResponseEntity response = ciudadService.agregarCiudad(c);
                return response;
            } catch (Exception ex) {
                return ResponseEntity.badRequest().body(ex.getMessage());
            }
        }else{
            return ResponseEntity.badRequest().body("No se pudo crear la ciudad");
        }
    }

    @GetMapping("/todos")
    @ResponseBody
    public ResponseEntity<List<CiudadDTO>> buscarTodos () throws ResourceNotFoundException {
        try {
            List<CiudadDTO> listaCiudadDTO = ciudadService.buscarTodos();
            return ResponseEntity.ok(listaCiudadDTO);
        }catch (Exception ex){
            throw new ResourceNotFoundException(ex.getMessage());
        }
    }
    @GetMapping("/porId/{id}")
    @ResponseBody
    public ResponseEntity<CiudadDTO> buscarPorId (@PathVariable int id) throws ResourceNotFoundException {
        try {
            CiudadDTO ciudadDTO = ciudadService.buscarPorId(id);
            return ResponseEntity.ok(ciudadDTO);
        }catch (Exception ex){
            throw new ResourceNotFoundException(ex.getMessage());
        }
    }

    @GetMapping("/porNombre")
    public ResponseEntity<List<CiudadDTO>> getCiudadPorNombre(@RequestParam() String nombre){
        List<CiudadDTO> ciudadDTOList = new ArrayList<>();
            try {
                ciudadDTOList = ciudadService.buscarPorNombre(nombre);
                return ResponseEntity.ok(ciudadDTOList);
            }catch (Exception ex){
                return ResponseEntity.badRequest().body(ciudadDTOList);
            }
    }

    @GetMapping("/porCoordenadas")
    @ResponseBody
    public ResponseEntity<CiudadDTO> getCiudadPorCoordenadas(@RequestParam() double latitud,
                                                              @RequestParam() double longitud){
        CiudadDTO ciudadDTO = new CiudadDTO();
        try {
            ciudadDTO = ciudadService.buscarPorCoordenadas(latitud, longitud);
            return ResponseEntity.ok(ciudadDTO);
        }catch (Exception ex){
            return ResponseEntity.badRequest().body(ciudadDTO);
        }
    }
}
