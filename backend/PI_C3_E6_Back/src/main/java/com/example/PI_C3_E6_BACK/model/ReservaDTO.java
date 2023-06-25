package com.example.PI_C3_E6_BACK.model;

import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.UsuarioDTO;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

public class ReservaDTO implements Serializable {
    private int id;
    private int tourId;
    private int usuarioId;
    private LocalDate fechaInicio;
    private int duracion;

    private String medioDePago;

    private String menu;

    private String alojamiento;

    private String informacionDeSalud;

    public ReservaDTO() {
    }

    public ReservaDTO(int tourId, int usuarioId, LocalDate fechaInicio, String medioDePago, String menu, String alojamiento, String informacionDeSalud) {
        this.tourId = tourId;
        this.usuarioId = usuarioId;
        this.fechaInicio = fechaInicio;
        this.medioDePago = medioDePago;
        this.menu = menu;
        this.alojamiento = alojamiento;
        this.informacionDeSalud = informacionDeSalud;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getTourId() {
        return tourId;
    }

    public void setTourId(int tourId) {
        this.tourId = tourId;
    }

    public int getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(int usuarioId) {
        this.usuarioId = usuarioId;
    }

    public LocalDate getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(LocalDate fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public int getDuracion() {
        return duracion;
    }

    public void setDuracion(int duracion) {
        this.duracion = duracion;
    }

    public String getMedioDePago() {
        return medioDePago;
    }

    public void setMedioDePago(String medioDePago) {
        this.medioDePago = medioDePago;
    }

    public String getMenu() {
        return menu;
    }

    public void setMenu(String menu) {
        this.menu = menu;
    }

    public String getAlojamiento() {
        return alojamiento;
    }

    public void setAlojamiento(String alojamiento) {
        this.alojamiento = alojamiento;
    }

    public String getInformacionDeSalud() {
        return informacionDeSalud;
    }

    public void setInformacionDeSalud(String informacionDeSalud) {
        this.informacionDeSalud = informacionDeSalud;
    }
}
