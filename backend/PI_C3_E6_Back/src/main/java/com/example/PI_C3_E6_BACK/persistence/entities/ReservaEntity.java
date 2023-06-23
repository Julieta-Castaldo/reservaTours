package com.example.PI_C3_E6_BACK.persistence.entities;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "Reservas")
public class ReservaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="Tours_id", nullable = false)
    private TourEntity tour;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="Usuarios_id", nullable = false)
    private UsuarioEntity usuario;

    @Column(name="fechaInicioReserva")
    private LocalDate fechaInicioReserva;

    @Column(name = "duracionTour")
    private int duracion;

    //---- Constructor -----


    public ReservaEntity() {
    }

    public ReservaEntity(TourEntity tour, UsuarioEntity usuario, LocalDate fechaInicioReserva) {
        this.tour = tour;
        this.usuario = usuario;
        this.duracion = tour.getDuracion();
        this.fechaInicioReserva = fechaInicioReserva;
    }

    // Getters y setters

    public TourEntity getTour() {
        return tour;
    }

    public void setTour(TourEntity tour) {
        this.tour = tour;
    }

    public UsuarioEntity getUsuario() {
        return usuario;
    }

    public void setUsuario(UsuarioEntity usuario) {
        this.usuario = usuario;
    }

    public int getDuracion() {
        return duracion;
    }

    public void setDuracion(int duracion) {
        this.duracion = duracion;
    }

    public LocalDate getFechaInicioReserva() {
        return fechaInicioReserva;
    }

    public void setFechaInicioReserva(LocalDate fechaInicioReserva) {
        this.fechaInicioReserva = fechaInicioReserva;
    }
}
