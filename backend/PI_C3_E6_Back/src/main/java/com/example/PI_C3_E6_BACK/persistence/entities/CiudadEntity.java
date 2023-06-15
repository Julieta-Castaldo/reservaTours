package com.example.PI_C3_E6_BACK.persistence.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Ciudades")
public class CiudadEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name="nombre")
    private String nombreCiudad;

    @Column(name="latitud")
    private double latitud;

    @Column(name="longitud")
    private double longitud;

    @Column(name="descripcionCiudad")
    private String descripcionCiudad;

    //constructors


    public CiudadEntity(String nombreCiudad, double latitud, double longitud, String descripcionCiudad) {
        this.nombreCiudad = nombreCiudad;
        this.latitud = latitud;
        this.longitud = longitud;
        this.descripcionCiudad = descripcionCiudad;
    }

    public CiudadEntity() {
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
