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





    //constructors
    public CategoriaEntity(String nombreCategoria) {
        this.nombre = nombreCategoria;
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
}
