package com.example.PI_C3_E6_BACK.model;

import java.io.Serializable;
import java.util.List;

public class RequestTourDTO implements Serializable {

    private int id;
    private String nombre;
    private String descripcion;
    private int categoriaId;
    private int ciudadId;
    private List<ImagenesDTO> listaImagenes;
    private double precio;
    private List<String> caracteristicasSi;
    private int duracion;

    public RequestTourDTO(String nombre, String descripcion, int categoriaId, int ciudadId, List<ImagenesDTO> listaImagenes, double precio, List<String> caracteristicasSi, int duracion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoriaId = categoriaId;
        this.ciudadId = ciudadId;
        this.listaImagenes = listaImagenes;
        this.precio = precio;
        this.caracteristicasSi = caracteristicasSi;
        this.duracion = duracion;
    }

    public RequestTourDTO() {
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

    public int getCategoriaId() {
        return categoriaId;
    }

    public void setCategoriaId(int categoriaId) {
        this.categoriaId = categoriaId;
    }

    public int getCiudadId() {
        return ciudadId;
    }

    public void setCiudadId(int ciudadId) {
        this.ciudadId = ciudadId;
    }

    public List<ImagenesDTO> getListaImagenes() {
        return listaImagenes;
    }

    public void setListaImagenes(List<ImagenesDTO> listaImagenes) {
        this.listaImagenes = listaImagenes;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public List<String> getCaracteristicasSi() {
        return caracteristicasSi;
    }

    public void setCaracteristicasSi(List<String> caracteristicasSi) {
        this.caracteristicasSi = caracteristicasSi;
    }

    public int getDuracion() {
        return duracion;
    }

    public void setDuracion(int duracion) {
        this.duracion = duracion;
    }
}
