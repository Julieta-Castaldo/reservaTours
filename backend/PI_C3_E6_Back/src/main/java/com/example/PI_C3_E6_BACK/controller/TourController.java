package com.example.PI_C3_E6_BACK.controller;


import com.example.PI_C3_E6_BACK.exceptions.ResourceNotFoundException;
import com.example.PI_C3_E6_BACK.model.TourDTO;
import com.example.PI_C3_E6_BACK.service.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

}
