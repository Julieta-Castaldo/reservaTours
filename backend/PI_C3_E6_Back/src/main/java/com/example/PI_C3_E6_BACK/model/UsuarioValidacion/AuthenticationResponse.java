package com.example.PI_C3_E6_BACK.model.UsuarioValidacion;

import org.springframework.beans.factory.annotation.Autowired;

public class AuthenticationResponse {
    private String jwt;

    public AuthenticationResponse(String jwt) {
        this.jwt = jwt;

    }
}
