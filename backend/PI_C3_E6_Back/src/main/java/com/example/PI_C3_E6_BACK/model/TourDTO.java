package com.example.PI_C3_E6_BACK.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public class TourDTO implements Serializable {
    private int id;
    private String nombre;
    private String descripcion;
    private CategoriaDTO categoria;
    private CiudadDTO ciudad;
    private List<ImagenesDTO> listaImagenes;
    private double precio;
    private List<String> caracteristicasSi;
    private int duracion;

    //constructors


    public TourDTO(String nombre, String descripcion, CategoriaDTO categoria, CiudadDTO ciudad, List<ImagenesDTO> listaImagenes, double precio, List<String> caracteristicasSi, int duracion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.listaImagenes = listaImagenes;
        this.precio = precio;
        this.caracteristicasSi = caracteristicasSi;
        this.duracion = duracion;
    }

    public TourDTO() {
    }

    //getters y setters

    public int getDuracion() {
        return duracion;
    }

    public void setDuracion(int duracion) {
        this.duracion = duracion;
    }

    public List<String> getCaracteristicasSi() {
        return caracteristicasSi;
    }

    public void setCaracteristicasSi(List<String> caracteristicasSi) {
        this.caracteristicasSi = caracteristicasSi;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }


    public CategoriaDTO getCategoria() {
        return categoria;
    }

    public void setCategoria(CategoriaDTO categoria) {
        this.categoria = categoria;
    }

    public CiudadDTO getCiudad() {
        return ciudad;
    }

    public void setCiudad(CiudadDTO ciudad) {
        this.ciudad = ciudad;
    }

    public List<ImagenesDTO> getListaImagenes() {
        return listaImagenes;
    }

    public void setListaImagenes(List<ImagenesDTO> listaImagenes) {
        this.listaImagenes = listaImagenes;
    }
}
