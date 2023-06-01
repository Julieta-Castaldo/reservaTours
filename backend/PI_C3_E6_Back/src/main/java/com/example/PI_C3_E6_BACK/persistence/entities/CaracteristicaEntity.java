package com.example.PI_C3_E6_BACK.persistence.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Caracteristicas")
public class CaracteristicaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Tours_id")
    private TourEntity tour;
    @Column(name = "desayuno")
    private String desayuno;
    @Column(name = "transporte")
    private String transporte;
    @Column(name = "almuerzo")
    private String almuerzo;
    @Column(name = "guia_turistico")
    private String guiaTuristico;
    @Column(name = "cena")
    private String cena;

    //constructors


    public CaracteristicaEntity(TourEntity tour, String desayuno, String transporte, String almuerzo, String guiaTuristico, String cena) {
        this.tour = tour;
        this.desayuno = desayuno;
        this.transporte = transporte;
        this.almuerzo = almuerzo;
        this.guiaTuristico = guiaTuristico;
        this.cena = cena;
    }

    public CaracteristicaEntity() {
    }

    //getters y setters

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

    public String getDesayuno() {
        return desayuno;
    }

    public void setDesayuno(String desayuno) {
        this.desayuno = desayuno;
    }

    public String getTransporte() {
        return transporte;
    }

    public void setTransporte(String transporte) {
        this.transporte = transporte;
    }

    public String getAlmuerzo() {
        return almuerzo;
    }

    public void setAlmuerzo(String almuerzo) {
        this.almuerzo = almuerzo;
    }

    public String getGuiaTuristico() {
        return guiaTuristico;
    }

    public void setGuiaTuristico(String guiaTuristico) {
        this.guiaTuristico = guiaTuristico;
    }

    public String getCena() {
        return cena;
    }

    public void setCena(String cena) {
        this.cena = cena;
    }
}
