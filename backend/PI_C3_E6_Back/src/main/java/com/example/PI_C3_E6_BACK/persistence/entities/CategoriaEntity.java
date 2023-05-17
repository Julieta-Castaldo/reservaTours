package com.example.PI_C3_E6_BACK.persistence.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Categoria")
public class CategoriaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private int id;
    @Column(name="nombre")
    private String nombreCategoria;



    //constructors
    public CategoriaEntity(String nombreCategoria) {
        this.nombreCategoria = nombreCategoria;
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
        return nombreCategoria;
    }

    public void setNombreCategoria(String nombreCategoria) {
        this.nombreCategoria = nombreCategoria;
    }
}
