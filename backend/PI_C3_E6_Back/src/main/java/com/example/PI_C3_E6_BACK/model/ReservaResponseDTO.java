package com.example.PI_C3_E6_BACK.model;

import java.io.Serializable;

public class ReservaResponseDTO implements Serializable {
    private String nombreTour;
    private ReservaDTO reservaDTO;

    public ReservaResponseDTO(String nombreTour, ReservaDTO reservaDTO) {
        this.nombreTour = nombreTour;
        this.reservaDTO = reservaDTO;
    }

    public ReservaResponseDTO() {
    }

    public String getNombreTour() {
        return nombreTour;
    }

    public void setNombreTour(String nombreTour) {
        this.nombreTour = nombreTour;
    }

    public ReservaDTO getReservaDTO() {
        return reservaDTO;
    }

    public void setReservaDTO(ReservaDTO reservaDTO) {
        this.reservaDTO = reservaDTO;
    }
}
