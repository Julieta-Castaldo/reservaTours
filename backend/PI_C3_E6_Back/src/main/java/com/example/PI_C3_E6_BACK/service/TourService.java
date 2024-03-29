package com.example.PI_C3_E6_BACK.service;

import com.example.PI_C3_E6_BACK.configuration.MapperConfig;
import com.example.PI_C3_E6_BACK.exceptions.ResourceNotFoundException;
import com.example.PI_C3_E6_BACK.model.*;
import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.PageResponseDTO;
import com.example.PI_C3_E6_BACK.persistence.entities.*;
import com.example.PI_C3_E6_BACK.persistence.repository.*;
import jakarta.persistence.criteria.Expression;
import jakarta.persistence.criteria.Subquery;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;
import java.util.stream.Collectors;

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
    CaracteristicaRepository repoCaracteristicas;
    @Autowired
    FechaOcupadaRepository repoFechaOcupada;
    @Autowired
    CaracteristicaService caracteristicaService;
    @Autowired
    private MapperConfig modelMapper;
    private static final Logger log = LogManager.getLogger(TourService.class);

    public TourDTO buscarPorId(int id){
        TourDTO tourDTO = null;
        List<ImagenesDTO> imagenesDTO = new ArrayList<>();
        List<ImagenesEntity> imagenes = new ArrayList<>();
        TourEntity tour = new TourEntity();
        List<String> caracteristicaDTO = new ArrayList<String>();

        if(id >=0){
            try{
                tour = repo.findTourById(id);
                imagenes = repoImagenes.findImgById(id);
                caracteristicaDTO = caracteristicaService
                        .convertCaracteristicaDTO(
                                repoCaracteristicas.findCaracteristicaByTour(id));

            }catch (Exception e) {
                log.error(e.getMessage());
            }
            for(ImagenesEntity img : imagenes){
                img.setTour(tour);
                imagenesDTO.add(modelMapper.getModelMapper().map(img,ImagenesDTO.class));
            }
            tourDTO = modelMapper.getModelMapper().map(tour, TourDTO.class);
            tourDTO.setListaImagenes(imagenesDTO);
            tourDTO.setCaracteristicasSi(caracteristicaDTO);

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

    public PageResponseDTO<TourDTO> buscarTodosPaginado(Pageable pageable){
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
        return new PageResponseDTO<>(
                listaDTO,
                listaEntity.getPageable(),
                listaEntity.getTotalElements()
        );
    }

    public PageResponseDTO<TourDTO> buscarPorCategoriaPaginado(Pageable pageable, int id){
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
        return new PageResponseDTO<>(
                listaDTO,
                listaEntity.getPageable(),
                listaEntity.getTotalElements()
        );
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

    public List<TourDTO> buscarTourPorCiudad(int idCiudad){
        List<TourDTO> listaDTO =new ArrayList<>();
        for(TourEntity tour : repo.findToursByCiudad(idCiudad)){
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

    public ResponseEntity<String> agregarTour(RequestTourDTO t) throws Exception{
        TourEntity tour = modelMapper.getModelMapper().map(t, TourEntity.class);
        CiudadEntity ciudad = modelMapper.getModelMapper().map(
                repoCiudad.findById(t.getCiudadId()), CiudadEntity.class);

            if( repo.findTourByName(t.getNombre()) == null) {
                try {
                    CategoriaEntity categoria = repoCategoria
                            .findById(
                                    t.getCategoriaId());
                    tour.setCiudad(ciudad);
                    tour.setCategoria(categoria);
                    repo.save(tour);
                    caracteristicaService
                            .convertCaracteristicaEntity(
                                    t.getCaracteristicasSi(),tour);
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


    public ResponseEntity<String> actualizarCategoriaTour(int tourId, int categoriaId) {
        try {
            TourEntity tour = repo.findTourById(tourId);
            if (tour != null) {
                CategoriaEntity categoria = repoCategoria.findById(categoriaId);
                if (categoria != null) {
                    tour.setCategoria(categoria);
                    repo.save(tour);
                    return ResponseEntity.ok("La categoría del tour ha sido actualizada exitosamente.");
                } else {
                    return ResponseEntity.badRequest().body("La categoría especificada no existe.");
                }
            } else {
                return ResponseEntity.badRequest().body("El tour especificado no existe.");
            }
        } catch (Exception ex) {
            log.error(ex.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Ocurrió un error al actualizar la categoría del tour.");
        }
    }

    //Método para buscar Tours que tengan determinada fecha disponible
    public List<TourDTO> buscarToursPorFechaDisponible(LocalDate fecha){
        List<TourDTO> toursDisponibles = new ArrayList<>();
        List<TourEntity> tours = repo.findAll(); // Obtener todos los tours

        for (TourEntity tour : tours) {
            // Verificar si la fecha está ocupada para el tour actual
            if (!repoFechaOcupada.existsByTourIdAndFechaOcupada(tour.getId(), fecha)) {
                TourDTO tourDTO = modelMapper.getModelMapper().map(tour, TourDTO.class);
                toursDisponibles.add(tourDTO);
            }
        }
        return toursDisponibles;
    }

    //Método para traer todas las fechas ocupadas que tenga un Tour
    public List<FechaOcupadaDTO> buscarFechasOcupadasPorTour(int idTour){
        List<FechaOcupadaDTO> fechasOcupadas = new ArrayList<>();
        List<FechaOcupadaEntity> fechas = repoFechaOcupada.findAll(); // Obtener todas las fechas ocupadas

        for (FechaOcupadaEntity fecha : fechas) {
            // Verificar si el registro de fecha coincide con el tour que estoy buscando
            if (fecha.getTour().getId() == idTour) {
                FechaOcupadaDTO fechaOcupadaDTO = modelMapper.getModelMapper().map(fecha, FechaOcupadaDTO.class);
                fechasOcupadas.add(fechaOcupadaDTO);
            }
        }
        return fechasOcupadas;
    }
    //buscador de tours dinámico (por 3 parámetros)
    public List<TourDTO> buscarToursDinamicamente(Integer ciudadId, LocalDate fechaDisponible, Integer categoriaId) {
        //List<TourEntity> tours = repo.buscarToursDinamicamente(ciudadId, fechaDisponible, categoriaId, fechaDisponible, fechaDisponible);
        List<TourEntity> tours = new ArrayList<>();
        List<TourEntity> toursFiltrados = new ArrayList<>();
        List<TourDTO> listaDTO =new ArrayList<>();
        if(fechaDisponible != null){
            tours = repo.findToursByFecha(fechaDisponible);
            for (TourEntity tour : tours) {
                LocalDate fechaHasta = fechaDisponible.plusDays(tour.getDuracion());
                if (!repoFechaOcupada.existsByTourIdAndFechaOcupada(tour.getId(), fechaHasta)) {
                    toursFiltrados.add(tour);
                }
            }
            tours = toursFiltrados;
        }else{
            tours = repo.findAll();
        }
        if (categoriaId != null){
            toursFiltrados = tours.stream()
                    .filter(tour -> Integer.valueOf(categoriaId).equals(tour.getCategoria().getId()))
                    .collect(Collectors.toList());
            tours = toursFiltrados;
        }
        if (ciudadId != null){
            toursFiltrados = tours.stream()
                    .filter(tour -> Integer.valueOf(ciudadId).equals(tour.getCiudad().getId()))
                    .collect(Collectors.toList());
            tours = toursFiltrados;
        }

        //se pasa a dto
        for(TourEntity tour : tours){
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

}
