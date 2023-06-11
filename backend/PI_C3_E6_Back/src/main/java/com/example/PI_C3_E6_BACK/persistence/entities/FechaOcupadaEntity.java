package com.example.PI_C3_E6_BACK.persistence.entities;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "FechasOcupadas")
public class FechaOcupadaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "fechaOcupada")
    private LocalDate fechaOcupada;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "Tours_id", referencedColumnName = "id", nullable = false)
    private TourEntity tour;

    //constructors

    public FechaOcupadaEntity(LocalDate fechaOcupada, TourEntity tour) {
        this.fechaOcupada = fechaOcupada;
        this.tour = tour;
    }

    public FechaOcupadaEntity() {
    }

    //getters y setters


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

    public TourEntity getTour() {
        return tour;
    }

    public void setTour(TourEntity tour) {
        this.tour = tour;
    }
}
