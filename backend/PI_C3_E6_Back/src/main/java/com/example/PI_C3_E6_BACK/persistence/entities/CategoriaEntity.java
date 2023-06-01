package com.example.PI_C3_E6_BACK.persistence.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Categorias")
public class CategoriaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name="nombre")
    private String nombre;

    @Column(name="descripcion")
    private String descripcion;

    @Column(name="url_imagen")
    private String url_imagen;

    //constructors

    public CategoriaEntity(String nombre, String descripcion, String url_imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.url_imagen = url_imagen;
    }

    public CategoriaEntity() {
    }

    //getters y setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreCategoria() {
        return nombre;
    }

    public void setNombreCategoria(String nombreCategoria) {
        this.nombre = nombreCategoria;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUrl_imagen() {
        return url_imagen;
    }

    public void setUrl_imagen(String url_imagen) {
        this.url_imagen = url_imagen;
    }
}
