package com.example.PI_C3_E6_BACK.model;

import java.io.Serializable;

public class CategoriaDTO implements Serializable {
    private int id;
    private String nombreCategoria;

    //constructors
    public CategoriaDTO(int id, String nombreCategoria) {
        this.id = id;
        this.nombreCategoria = nombreCategoria;
    }

    public CategoriaDTO() {
    }

    //getters y setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreCategoria() {
        return nombreCategoria;
    }

    public void setNombreCategoria(String nombreCategoria) {
        this.nombreCategoria = nombreCategoria;
    }
}
