package com.example.PI_C3_E6_BACK.service;
import com.example.PI_C3_E6_BACK.configuration.MapperConfig;
import com.example.PI_C3_E6_BACK.model.CategoriaDTO;
import com.example.PI_C3_E6_BACK.persistence.entities.CategoriaEntity;
import com.example.PI_C3_E6_BACK.persistence.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class CategoriaService {

    @Autowired
    CategoriaRepository repoCategoria;
    @Autowired
    private MapperConfig modelMapper;

    public List<CategoriaDTO> buscarTodos (){
        List<CategoriaDTO> listaDTO =new ArrayList<>();
        for(CategoriaEntity categoria : repoCategoria.findAll()){
            CategoriaDTO categoriaDTO = modelMapper.getModelMapper().map(categoria, CategoriaDTO.class);
            listaDTO.add(categoriaDTO);
        }
        return listaDTO;
    }
}
