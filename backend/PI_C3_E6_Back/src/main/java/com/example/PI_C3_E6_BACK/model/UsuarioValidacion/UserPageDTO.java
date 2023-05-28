package com.example.PI_C3_E6_BACK.model.UsuarioValidacion;

import java.io.Serializable;
import java.util.List;


public class UserPageDTO extends PageResponseDTO<UsuarioDTO> implements Serializable {
        public UserPageDTO(List<UsuarioDTO> content) {
            super(content);
        }
}

