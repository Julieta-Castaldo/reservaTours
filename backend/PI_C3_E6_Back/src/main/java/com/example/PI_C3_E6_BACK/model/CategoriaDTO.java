package com.example.PI_C3_E6_BACK.model;

import java.io.Serializable;

public class CategoriaDTO implements Serializable {
    private int id;
    private String nombreCategoria;

    private String descripcionCategoria;

    private String url_imagen;

    //constructors
    public CategoriaDTO(String nombreCategoria, String descripcionCategoria, String url_imagen) {

        this.nombreCategoria = nombreCategoria;
        this.descripcionCategoria = descripcionCategoria;
        this.url_imagen = url_imagen;
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

    public String getDescripcionCategoria() {
        return descripcionCategoria;
    }

    public void setDescripcionCategoria(String descripcionCategoria) {
        this.descripcionCategoria = descripcionCategoria;
    }

    public String getUrl_imagen() {
        return url_imagen;
    }

    public void setUrl_imagen(String url_imagen) {
        this.url_imagen = url_imagen;
    }
}
