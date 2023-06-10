package com.example.PI_C3_E6_BACK.model;

import java.io.Serializable;

public class CiudadDTO implements Serializable {
    private int id;
    private String nombreCiudad;
    private double latitud;
    private double longitud;
    private String descripcionCiudad;

    //constructors


    public CiudadDTO(String nombreCiudad, double latitud, double longitud, String descripcionCiudad) {
        this.nombreCiudad = nombreCiudad;
        this.latitud = latitud;
        this.longitud = longitud;
        this.descripcionCiudad = descripcionCiudad;
    }

    public CiudadDTO() {
    }

    //getters y setters

    public double getLatitud() {
        return latitud;
    }

    public void setLatitud(double latitud) {
        this.latitud = latitud;
    }

    public double getLongitud() {
        return longitud;
    }

    public void setLongitud(double longitud) {
        this.longitud = longitud;
    }

    public String getDescripcionCiudad() {
        return descripcionCiudad;
    }

    public void setDescripcionCiudad(String descripcionCiudad) {
        this.descripcionCiudad = descripcionCiudad;
    }

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
