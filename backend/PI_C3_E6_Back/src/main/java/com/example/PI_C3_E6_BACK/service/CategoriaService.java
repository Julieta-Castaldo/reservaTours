package com.example.PI_C3_E6_BACK.service;
import com.example.PI_C3_E6_BACK.configuration.MapperConfig;
import com.example.PI_C3_E6_BACK.model.CategoriaDTO;
import com.example.PI_C3_E6_BACK.model.ImagenesDTO;
import com.example.PI_C3_E6_BACK.model.TourDTO;
import com.example.PI_C3_E6_BACK.persistence.entities.CategoriaEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.ImagenesEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.TourEntity;
import com.example.PI_C3_E6_BACK.persistence.repository.CategoriaRepository;
import com.example.PI_C3_E6_BACK.persistence.repository.TourRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class CategoriaService {

    @Autowired
    CategoriaRepository repoCategoria;
    @Autowired
    private MapperConfig modelMapper;

    @Autowired
    TourRepository repoTour;

    private static final Logger log = LogManager.getLogger(CategoriaService.class);

    public List<CategoriaDTO> buscarTodos() {
        List<CategoriaDTO> listaDTO = new ArrayList<>();
        for (CategoriaEntity categoria : repoCategoria.findAll()) {
            CategoriaDTO categoriaDTO = modelMapper.getModelMapper().map(categoria, CategoriaDTO.class);
            listaDTO.add(categoriaDTO);
        }
        return listaDTO;
    }

    public ResponseEntity<String> agregarCategoria(CategoriaDTO c) throws Exception {
        CategoriaEntity categoria = modelMapper.getModelMapper().map(c, CategoriaEntity.class);

        if (repoCategoria.findCategoriaByName(c.getNombreCategoria()) == null) {
            try {
                repoCategoria.save(categoria);
                return ResponseEntity.ok("La categoría fue creada con éxito");
            } catch (Exception ex) {
                log.error(ex.getMessage());
                return ResponseEntity.badRequest().body(ex.getMessage());
            }
        } else {
            String error = "No se pudo crear la categoría porque ya existe otra con el mismo nombre";
            log.error(error);
            return ResponseEntity.badRequest().body(error);
        }
    }

    public ResponseEntity<String> borrarCategoria(int id) {
        CategoriaEntity categoria = repoCategoria.findById(id);

        // Verificar si existen tours asociados a la categoría
        List<TourEntity> tours = repoTour.findToursByCategoria(id);
        if (!tours.isEmpty()) {
            return ResponseEntity.badRequest().body("No se puede eliminar la categoría porque tiene tours asociados, " +
                    "cambia la categoría de los tours que pertenecen a " + categoria.getNombreCategoria());
        }

        repoCategoria.delete(categoria);
        return ResponseEntity.ok("Categoría eliminada exitosamente");
    }
}
