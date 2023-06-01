package com.example.PI_C3_E6_BACK.service;

import com.example.PI_C3_E6_BACK.configuration.MapperConfig;
import com.example.PI_C3_E6_BACK.persistence.entities.CaracteristicaEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.CategoriaEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.TourEntity;
import com.example.PI_C3_E6_BACK.persistence.repository.CaracteristicaRepository;
import com.example.PI_C3_E6_BACK.persistence.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.ArrayList;
import java.util.List;

@Service
public class CaracteristicaService {

    @Autowired
    CaracteristicaRepository repoCaracteristicas;
    @Autowired
    private MapperConfig modelMapper;

    public List<String> convertCaracteristicaDTO(CaracteristicaEntity caracteristicaEntity){
        List<String> caracteristicasSi = new ArrayList<>();
            if ("SI".equals(caracteristicaEntity.getDesayuno())) {
                caracteristicasSi.add("Desayuno");
            }
            if ("SI".equals(caracteristicaEntity.getTransporte())) {
                caracteristicasSi.add("Transporte");
            }
            if ("SI".equals(caracteristicaEntity.getAlmuerzo())) {
                caracteristicasSi.add("Almuerzo");
            }
            if ("SI".equals(caracteristicaEntity.getCena())) {
                caracteristicasSi.add("Cena");
            }
            if ("SI".equals(caracteristicaEntity.getGuiaTuristico())) {
                caracteristicasSi.add("Guía Turístico");
            }
        return caracteristicasSi;
    }
    public void convertCaracteristicaEntity(List<String> caracteristicasSi, TourEntity tourEntity){
        CaracteristicaEntity caracteristicaEntity = new CaracteristicaEntity();
        if(caracteristicasSi != null) {
            for (String caracteristica : caracteristicasSi) {
                if ("Desayuno".equals(caracteristica)) {
                    caracteristicaEntity.setDesayuno("SI");
                }
                if ("Transporte".equals(caracteristica)) {
                    caracteristicaEntity.setTransporte("SI");
                }
                if ("Almuerzo".equals(caracteristica)) {
                    caracteristicaEntity.setAlmuerzo("SI");
                }
                if ("Cena".equals(caracteristica)) {
                    caracteristicaEntity.setCena("SI");
                }
                if ("Guía Turístico".equals(caracteristica)) {
                    caracteristicaEntity.setGuiaTuristico("SI");
                }
            }
        }
        caracteristicaEntity.setTour(tourEntity);
        repoCaracteristicas.save(caracteristicaEntity);
    }
}


