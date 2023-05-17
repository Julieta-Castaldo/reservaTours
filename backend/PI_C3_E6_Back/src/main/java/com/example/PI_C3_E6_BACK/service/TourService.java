package com.example.PI_C3_E6_BACK.service;

import com.example.PI_C3_E6_BACK.configuration.MapperConfig;
import com.example.PI_C3_E6_BACK.model.TourDTO;
import com.example.PI_C3_E6_BACK.persistence.entities.TourEntity;
import com.example.PI_C3_E6_BACK.persistence.repository.TourRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.Optional;

@Service
public class TourService {

    @Autowired
    TourRepository repo;
    @Autowired
    private MapperConfig modelMapper;
    private static final Logger log = LogManager.getLogger(TourService.class);

    public TourDTO buscarPorId(int id){
        TourDTO tourDTO = null;
        TourEntity tour = new TourEntity();
        if(id >=0){
            try{
                tour = repo.findTourById(id);
            }catch (Exception e){
                log.error(e.getMessage());
            }
            tourDTO = modelMapper.getModelMapper().map(tour, TourDTO.class);
            return tourDTO;
        }
        log.error("Id inválido");
        return tourDTO;
    }
    public TourDTO buscarPorNombre (String nombre){
        TourDTO tourDTO = new TourDTO();
        try {
            TourEntity tour = repo.findTourByName(nombre);
            tourDTO = modelMapper.getModelMapper().map(tour, TourDTO.class);
            return tourDTO;
        }catch (Exception e){
            log.error(e.getMessage());
        }
        return tourDTO;
    }
    public void agregarTour(TourDTO t) throws Exception{
        TourEntity tour = modelMapper.getModelMapper().map(t, TourEntity.class);
        if (t.getFechaSalida().isAfter(LocalDate.now()) && repo.findTourByName(t.getNombre()) == null){

        }
    }


}
