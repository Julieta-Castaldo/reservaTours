package com.example.PI_C3_E6_BACK.model;

import java.io.Serializable;
import java.time.LocalDate;

public class FechaOcupadaDTO implements Serializable {

    private int id;

    private LocalDate fechaOcupada;

    //Constructor

    public FechaOcupadaDTO(LocalDate fechaOcupada) {
        this.fechaOcupada = fechaOcupada;
    }

    public FechaOcupadaDTO() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDate getFechaOcupada() {
        return fechaOcupada;
    }

    public void setFechaOcupada(LocalDate fechaOcupada) {
        this.fechaOcupada = fechaOcupada;
    }
}
