package com.example.PI_C3_E6_BACK.model.UsuarioValidacion;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import java.io.Serializable;
import java.util.List;

@JsonIgnoreProperties({"pageable","last","size","sort","first","numberOfElements","empty"})
public class PageResponseDTO<T> extends PageImpl<T> implements Serializable {
    public PageResponseDTO(List<T> content, Pageable pageable, long total) {
        super(content, pageable, total);
    }

    public PageResponseDTO(List<T> content) {
        super(content);
    }
}
