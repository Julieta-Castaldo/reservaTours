package com.example.PI_C3_E6_BACK.controller;

import com.example.PI_C3_E6_BACK.model.CategoriaDTO;
import com.example.PI_C3_E6_BACK.model.RequestTourDTO;
import com.example.PI_C3_E6_BACK.model.ReservaDTO;
import com.example.PI_C3_E6_BACK.service.ReservaService;
import com.example.PI_C3_E6_BACK.service.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("Reserva")
@CrossOrigin(origins = "*")
public class ReservaController implements IController<ReservaDTO> {

    @Autowired
    private ReservaService reservaService;

    @PostMapping("/crear")
    public ResponseEntity<String> crearReserva(@RequestBody ReservaDTO r){
                try {
                    ResponseEntity response = reservaService.crearReserva(r);
                    return response;
                } catch (Exception ex) {
                    return ResponseEntity.badRequest().body(ex.getMessage());
                }
    }
    @GetMapping("/porUsuario/{idUsuario}")
    @ResponseBody
    public ResponseEntity<List<ReservaDTO>> buscarReservasPorUsuario (@PathVariable int idUsuario){
        List<ReservaDTO> listaReservaDTO = new ArrayList<>();
        try {
            listaReservaDTO = reservaService.buscarReservaPorUsuario(idUsuario);
            return ResponseEntity.ok(listaReservaDTO);
        }catch (Exception ex) {
            return ResponseEntity.badRequest().body(listaReservaDTO);
        }
    }

    @GetMapping("/todos")
    @ResponseBody
    public ResponseEntity<List<ReservaDTO>> buscarTodos (){
        List<ReservaDTO> listaReservaDTO = new ArrayList<>();
        try {
            listaReservaDTO = reservaService.buscarTodos();
            return ResponseEntity.ok(listaReservaDTO);
        }catch (Exception ex) {
            return ResponseEntity.badRequest().body(listaReservaDTO);
        }
    }

    @GetMapping("/porId/{idReserva}")
    @ResponseBody
    public ResponseEntity<ReservaDTO> buscarReservasPorId (@PathVariable int idReserva){
        ReservaDTO reservaDTO = new ReservaDTO();
        try {
            reservaDTO = reservaService.buscarReservaPorId(idReserva);
            return ResponseEntity.ok(reservaDTO);
        }catch (Exception ex) {
            return ResponseEntity.badRequest().body(reservaDTO);
        }
    }
}
