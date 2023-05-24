package com.example.PI_C3_E6_BACK.service;

import com.example.PI_C3_E6_BACK.configuration.MapperConfig;
import com.example.PI_C3_E6_BACK.exceptions.ResourceNotFoundException;
import com.example.PI_C3_E6_BACK.model.ImagenesDTO;
import com.example.PI_C3_E6_BACK.model.TourDTO;
import com.example.PI_C3_E6_BACK.persistence.entities.CategoriaEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.CiudadEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.ImagenesEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.TourEntity;
import com.example.PI_C3_E6_BACK.persistence.repository.CategoriaRepository;
import com.example.PI_C3_E6_BACK.persistence.repository.CiudadRepository;
import com.example.PI_C3_E6_BACK.persistence.repository.ImagenesRepository;
import com.example.PI_C3_E6_BACK.persistence.repository.TourRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class TourService {

    @Autowired
    TourRepository repo;
    @Autowired
    ImagenesRepository repoImagenes;
    @Autowired
    CategoriaRepository repoCategoria;
    @Autowired
    CiudadRepository repoCiudad;
    @Autowired
    private MapperConfig modelMapper;
    private static final Logger log = LogManager.getLogger(TourService.class);

    public TourDTO buscarPorId(int id){
        TourDTO tourDTO = null;
        List<ImagenesDTO> imagenesDTO = new ArrayList<>();
        List<ImagenesEntity> imagenes = new ArrayList<>();
        TourEntity tour = new TourEntity();
        if(id >=0){
            try{
                tour = repo.findTourById(id);
                imagenes = repoImagenes.findImgById(id);
            }catch (Exception e){
                log.error(e.getMessage());
            }
            for(ImagenesEntity img : imagenes){
                img.setTour(tour);
                imagenesDTO.add(modelMapper.getModelMapper().map(img,ImagenesDTO.class));
            }
            tourDTO = modelMapper.getModelMapper().map(tour, TourDTO.class);
            tourDTO.setListaImagenes(imagenesDTO);

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

    public List<TourDTO> buscarTodos (){
        List<TourDTO> listaDTO =new ArrayList<>();
        for(TourEntity tour : repo.findAll()){
            TourDTO tourDTO = modelMapper.getModelMapper().map(tour, TourDTO.class);
            List<ImagenesEntity> imagenesEntities = repoImagenes.findImgById(tour.getId());
            List<ImagenesDTO> imagenesDTOS = new ArrayList<>();
            for (ImagenesEntity img : imagenesEntities){
                imagenesDTOS.add(modelMapper.getModelMapper().map(img, ImagenesDTO.class));
            }
            tourDTO.setListaImagenes(imagenesDTOS);
            listaDTO.add(tourDTO);
        }
        return listaDTO;
    }

    public List<TourDTO> buscarTodosPaginado(Pageable pageable){
        Page<TourEntity> listaEntity = repo.findAll(pageable);
        List<TourDTO> listaDTO = new ArrayList<>();
        for(TourEntity tour : listaEntity){
            TourDTO tourDTO = modelMapper.getModelMapper().map(tour, TourDTO.class);
            List<ImagenesEntity> imagenesEntities = repoImagenes.findImgById(tour.getId());
            List<ImagenesDTO> imagenesDTOS = new ArrayList<>();
            for (ImagenesEntity img : imagenesEntities){
                imagenesDTOS.add(modelMapper.getModelMapper().map(img, ImagenesDTO.class));
            }
            tourDTO.setListaImagenes(imagenesDTOS);
            listaDTO.add(tourDTO);
        }
        return listaDTO;
    }

    public List<TourDTO> buscarPorCategoriaPaginado(Pageable pageable, int id){
        Page<TourEntity> listaEntity = repo.findByCategoria_id(id, pageable);
        List<TourDTO> listaDTO = new ArrayList<>();
        for(TourEntity tour : listaEntity){
            TourDTO tourDTO = modelMapper.getModelMapper().map(tour, TourDTO.class);
            List<ImagenesEntity> imagenesEntities = repoImagenes.findImgById(tour.getId());
            List<ImagenesDTO> imagenesDTOS = new ArrayList<>();
            for (ImagenesEntity img : imagenesEntities){
                imagenesDTOS.add(modelMapper.getModelMapper().map(img, ImagenesDTO.class));
            }
            tourDTO.setListaImagenes(imagenesDTOS);
            listaDTO.add(tourDTO);
        }
        return listaDTO;
    }
    public List<TourDTO> buscarPorCategoria(int idCategoria){
        List<TourDTO> listaDTO =new ArrayList<>();
        for(TourEntity tour : repo.findToursByCategoria(idCategoria)){
            TourDTO tourDTO = modelMapper.getModelMapper().map(tour, TourDTO.class);
            List<ImagenesEntity> imagenesEntities = repoImagenes.findImgById(tour.getId());
            List<ImagenesDTO> imagenesDTOS = new ArrayList<>();
            for (ImagenesEntity img : imagenesEntities){
                imagenesDTOS.add(modelMapper.getModelMapper().map(img, ImagenesDTO.class));
            }
            tourDTO.setListaImagenes(imagenesDTOS);
            listaDTO.add(tourDTO);
        }
        return listaDTO;
    }

    public ResponseEntity<String> agregarTour(TourDTO t) throws Exception{
        TourEntity tour = modelMapper.getModelMapper().map(t, TourEntity.class);
        CiudadEntity ciudad = modelMapper.getModelMapper().map(t.getCiudad(), CiudadEntity.class);

        if (t.getFechaSalida().isAfter(LocalDate.now())){
            if( repo.findTourByName(t.getNombre()) == null) {
                try {
                    CategoriaEntity categoria = repoCategoria.findCategoriaByName(t.getCategoria().getNombreCategoria());
                    tour.setCiudad(ciudad);
                    tour.setCategoria(categoria);
                    repoCiudad.save(ciudad);
                    repo.save(tour);
                    for (ImagenesDTO img : t.getListaImagenes()){
                        ImagenesEntity imagenEntity = modelMapper.getModelMapper().map(img,ImagenesEntity.class);
                        imagenEntity.setTour(tour);
                        repoImagenes.save(imagenEntity);
                    }
                    return ResponseEntity.ok("El tour fue creado con éxito");
                } catch (Exception ex) {
                    log.error(ex.getMessage());
                    return ResponseEntity.badRequest().body(ex.getMessage());
                }
            }else{
                String error = "No se pudo crear el tour ya que ya existe otro tour con el mismo nombre";
                log.error(error);
                return ResponseEntity.badRequest().body(error);
            }
        }else{
            String error = "No se pudo crear el tour. Verificar que la fecha de salida sea posterior a la fecha de hoy";
            log.error(error);
            return ResponseEntity.badRequest().body(error);
        }
    }

    public void borrarPorId(int id){

        if (id >= 0){
            try {
                TourEntity tour = repo.findTourById(id);
                for (ImagenesEntity img : repoImagenes.findImgById(tour.getId())){
                    repoImagenes.delete(img);
                }
                repo.deleteById(id);
                log.info("Turno eliminado");
            }catch (Exception ex) {
                log.error(ex.getMessage());
            }
        }
        log.error("id inválido");
    }





}
