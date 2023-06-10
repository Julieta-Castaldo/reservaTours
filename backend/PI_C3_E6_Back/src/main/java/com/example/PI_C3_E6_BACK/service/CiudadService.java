package com.example.PI_C3_E6_BACK.service;

import com.example.PI_C3_E6_BACK.configuration.MapperConfig;
import com.example.PI_C3_E6_BACK.model.CategoriaDTO;
import com.example.PI_C3_E6_BACK.model.CiudadDTO;
import com.example.PI_C3_E6_BACK.model.ImagenesDTO;
import com.example.PI_C3_E6_BACK.model.TourDTO;
import com.example.PI_C3_E6_BACK.persistence.entities.CategoriaEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.CiudadEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.ImagenesEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.TourEntity;
import com.example.PI_C3_E6_BACK.persistence.repository.CategoriaRepository;
import com.example.PI_C3_E6_BACK.persistence.repository.CiudadRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CiudadService {
    @Autowired
    CiudadRepository repoCiudad;
    @Autowired
    private MapperConfig modelMapper;
    @Autowired
    private static final Logger log = LogManager.getLogger(CiudadService.class);


    public List<CiudadDTO> buscarTodos (){
        List<CiudadDTO> listaDTO =new ArrayList<>();
        for(CiudadEntity ciudad : repoCiudad.findAll()){
            CiudadDTO ciudadDTO = modelMapper.getModelMapper().map(ciudad, CiudadDTO.class);
            listaDTO.add(ciudadDTO);
        }
        return listaDTO;
    }
    public ResponseEntity<String> agregarCiudad(CiudadDTO c) throws Exception{
        CiudadEntity ciudad = modelMapper.getModelMapper().map(c, CiudadEntity.class);

        if(repoCiudad.findByNombreCiudad(c.getNombreCiudad()) == null) {
            try {
                repoCiudad.save(ciudad);
                return ResponseEntity.ok("La ciudad fue agregada con éxito");
            } catch (Exception ex) {
                log.error(ex.getMessage());
                return ResponseEntity.badRequest().body(ex.getMessage());
            }
        }else{
            String error = "No se pudo agregar la ciudad porque ya existe esa ubicación";
            log.error(error);
            return ResponseEntity.badRequest().body(error);
        }
    }

    public CiudadDTO buscarPorId(int id){
        CiudadDTO ciudadDTO = null;
        CiudadEntity ciudad = new CiudadEntity();

        if(id >=0){
            try{
                ciudad = repoCiudad.findById(id);
            }catch (Exception e) {
                log.error(e.getMessage());
            }
            ciudadDTO = modelMapper.getModelMapper().map(ciudad, CiudadDTO.class);
            return ciudadDTO;
        }
        log.error("Id inválido");
        return ciudadDTO;
    }
    public List<CiudadDTO> buscarPorNombre(String nombre){

        List<CiudadDTO> listaDTO =new ArrayList<>();
        for(CiudadEntity ciudad : repoCiudad.findLikeNombreCiudad(nombre)){
            CiudadDTO ciudadDTO = modelMapper.getModelMapper().map(ciudad, CiudadDTO.class);
            listaDTO.add(ciudadDTO);
        }
        return listaDTO;
    }

    public CiudadDTO buscarPorCoordenadas(double latitud, double longitud){
        CiudadDTO ciudadDTO = null;
        CiudadEntity ciudad = new CiudadEntity();

            try{
                ciudad = repoCiudad.findByCoordenadas(latitud, longitud);
                ciudadDTO = modelMapper.getModelMapper().map(ciudad, CiudadDTO.class);
            }catch (Exception e) {
                log.error(e.getMessage());
            }

            return ciudadDTO;
    }
}
