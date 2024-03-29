package com.example.PI_C3_E6_BACK.model.UsuarioValidacion;

import com.example.PI_C3_E6_BACK.persistence.repository.UsuarioRepository;
import jdk.jfr.ContentType;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.Serializable;

public class UserLoguinResponse implements Serializable {
    private AuthenticationResponse response;
    private UsuarioDTO usuarioDTO;
    private String mensaje;

    @Autowired
    public UserLoguinResponse(AuthenticationResponse response, UsuarioDTO usuarioDTO) {
        this.response = response;
        this.usuarioDTO = usuarioDTO;
    }

    public UserLoguinResponse(String mensaje) {
        this.mensaje = mensaje;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public AuthenticationResponse getResponse() {
        return response;
    }

    public UsuarioDTO getUsuarioDTO() {
        return usuarioDTO;
    }

    public void setResponse(AuthenticationResponse response) {
        this.response = response;
    }

    public void setUsuarioDTO(UsuarioDTO usuarioDTO) {
        this.usuarioDTO = usuarioDTO;
    }
}
