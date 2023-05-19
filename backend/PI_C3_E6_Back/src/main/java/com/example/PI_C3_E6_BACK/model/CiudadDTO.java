package com.example.PI_C3_E6_BACK.model;

import java.io.Serializable;

public class CiudadDTO implements Serializable {
    private int id;
    private String nombreCiudad;

    //constructors
    public CiudadDTO( String nombreCiudad) {

        this.nombreCiudad = nombreCiudad;
    }

    public CiudadDTO() {
    }

    //getters y setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreCiudad() {
        return nombreCiudad;
    }

    public void setNombreCiudad(String nombreCiudad) {
        this.nombreCiudad = nombreCiudad;
    }
}
