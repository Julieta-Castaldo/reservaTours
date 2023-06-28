package com.example.PI_C3_E6_BACK.service;

import com.example.PI_C3_E6_BACK.configuration.MapperConfig;
import com.example.PI_C3_E6_BACK.model.FavoritoDTO;
import com.example.PI_C3_E6_BACK.model.TourDTO;
import com.example.PI_C3_E6_BACK.persistence.entities.FavoritoEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.TourEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.UsuarioEntity;
import com.example.PI_C3_E6_BACK.persistence.repository.FavoritoRepository;
import com.example.PI_C3_E6_BACK.persistence.repository.TourRepository;
import com.example.PI_C3_E6_BACK.persistence.repository.UsuarioRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FavoritoService {

    @Autowired
    FavoritoRepository repoFavoritos;
    @Autowired
    UsuarioRepository repoUsuario;
    @Autowired
    TourService tourService;
    @Autowired
    private MapperConfig modelMapper;
    @Autowired
    TourRepository repoTour;

    private static final Logger log = LogManager.getLogger(ReservaService.class);

    public List<TourDTO> buscarToursFavoritosPorUsuario (int idUsuario){
        List<FavoritoEntity>  listaFavoritos = repoFavoritos.findFavoritosByUser(idUsuario);
        List<TourDTO> listaTourDTO = new ArrayList<>();
        if (!listaFavoritos.isEmpty()) {
            for (FavoritoEntity fav : listaFavoritos) {
                TourDTO tourDTO = tourService.buscarPorId(fav.getTour().getId());
                listaTourDTO.add(tourDTO);
            }
        }
        return listaTourDTO;
    }

    public ResponseEntity<String> createUpdateFavoritos (FavoritoDTO fav){
        List<FavoritoEntity>  listaFavoritos = repoFavoritos.findFavoritosByUser(fav.getIdUsuario());
        List<Integer> listaFavsNueva = fav.getListaFavoritos();
        UsuarioEntity usuario = repoUsuario.findById(fav.getIdUsuario());
        if (!listaFavoritos.isEmpty()) {
            for (FavoritoEntity favoritoAnterior : listaFavoritos) {
                repoFavoritos.delete(favoritoAnterior);
            }
        }
        if (!listaFavsNueva.isEmpty()) {
            for (Integer idTour : listaFavsNueva) {
                FavoritoEntity favEntity = new FavoritoEntity(usuario, repoTour.findTourById(idTour));
                repoFavoritos.save(favEntity);
            }
        }
        return ResponseEntity.ok("Se guardaron tus favoritos!");
    }
}
