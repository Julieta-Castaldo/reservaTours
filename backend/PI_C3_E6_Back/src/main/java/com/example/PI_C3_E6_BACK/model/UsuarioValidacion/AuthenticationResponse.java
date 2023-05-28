package com.example.PI_C3_E6_BACK.model.UsuarioValidacion;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
@Data
@NoArgsConstructor
@Builder
public class AuthenticationResponse  implements Serializable {
    private String jwt;

    public AuthenticationResponse(String jwt) {
        this.jwt = jwt;

    }
}
