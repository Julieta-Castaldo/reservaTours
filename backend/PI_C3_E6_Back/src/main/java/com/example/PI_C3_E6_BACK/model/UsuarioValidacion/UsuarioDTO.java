package com.example.PI_C3_E6_BACK.model.UsuarioValidacion;

import java.io.Serializable;

public class UsuarioDTO implements Serializable {
    private String username;
    private String lastname;
    private String email;
    private String rol;


    public UsuarioDTO(String username, String lastname, String email, String rol) {
        this.username = username;
        this.lastname = lastname;
        this.email = email;
        this.rol = rol;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }
}
