package com.example.PI_C3_E6_BACK.persistence.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Ciudades")
public class CiudadEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private int id;
    @Column(name="nombre")
    private String nombreCiudad;

    //constructors

    public CiudadEntity(String nombreCiudad) {
        this.nombreCiudad = nombreCiudad;
    }

    public CiudadEntity() {
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
