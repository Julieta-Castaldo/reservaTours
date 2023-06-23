package com.example.PI_C3_E6_BACK.service;

import com.example.PI_C3_E6_BACK.configuration.MapperConfig;
import com.example.PI_C3_E6_BACK.model.CategoriaDTO;
import com.example.PI_C3_E6_BACK.model.ReservaDTO;
import com.example.PI_C3_E6_BACK.persistence.entities.CategoriaEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.FechaOcupadaEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.ReservaEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.TourEntity;
import com.example.PI_C3_E6_BACK.persistence.repository.FechaOcupadaRepository;
import com.example.PI_C3_E6_BACK.persistence.repository.ReservaRepository;
import com.example.PI_C3_E6_BACK.persistence.repository.TourRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class ReservaService {

    @Autowired
    ReservaRepository repoReserva;

    @Autowired
    TourRepository repoTour;

    @Autowired
    FechaOcupadaRepository repoFechaOcupada;

    @Autowired
    private MapperConfig modelMapper;

    private static final Logger log = LogManager.getLogger(ReservaService.class);

    public ResponseEntity<String> crearReserva(ReservaDTO r) throws Exception{

        // Obtener la información del tour por su ID
        TourEntity tour = repoTour.findById(r.getTourId()).orElse(null);

        if (tour == null) {
            // El tour no existe, retornar una respuesta de error
            return ResponseEntity.badRequest().body("El tour no existe");
        }

        ReservaEntity reserva = modelMapper.getModelMapper().map(r, ReservaEntity.class);
        reserva.setDuracion(tour.getDuracion());

            try {
                repoReserva.save(reserva);
                // Calcular fecha de fin de reserva
                LocalDate fechaFinReserva = r.getFechaInicio().plusDays(reserva.getDuracion()-1);

                // Generar fechas ocupadas dentro del rango de reserva
                LocalDate fechaActual = r.getFechaInicio();
                while (!fechaActual.isAfter(fechaFinReserva)) {
                    FechaOcupadaEntity fechaOcupada = new FechaOcupadaEntity(fechaActual, reserva.getTour());
                    repoFechaOcupada.save(fechaOcupada);

                    fechaActual = fechaActual.plusDays(1); // Avanzar a la siguiente fecha
                }
                return ResponseEntity.ok("La reserva fue creada con éxito");
            } catch (Exception ex) {
                log.error(ex.getMessage());
                return ResponseEntity.badRequest().body(ex.getMessage());
            }
    }
}
