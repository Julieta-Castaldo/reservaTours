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

    @Column(name = "medioDePago")
    private String medioDePago;

    @Column(name = "menu")
    private String menu;

    @Column(name = "alojamiento")
    private String alojamiento;

    @Column(name = "informacionDeSalud")
    private String informacionSalud;

    //---- Constructor -----


    public ReservaEntity() {
    }

    public ReservaEntity(TourEntity tour, UsuarioEntity usuario, LocalDate fechaInicioReserva, String medioDePago, String menu, String alojamiento, String informacionSalud) {
        this.tour = tour;
        this.usuario = usuario;
        this.fechaInicioReserva = fechaInicioReserva;
        this.duracion = tour.getDuracion();
        this.medioDePago = medioDePago;
        this.menu = menu;
        this.alojamiento = alojamiento;
        this.informacionSalud = informacionSalud;
    }

    // Getters y setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

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

    public String getInformacionSalud() {
        return informacionSalud;
    }

    public void setInformacionSalud(String informacionSalud) {
        this.informacionSalud = informacionSalud;
    }
}
