package com.example.PI_C3_E6_BACK.persistence.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Favoritos")
public class FavoritoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="Usuarios_id", nullable = false)
    private UsuarioEntity usuario;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="Tours_id", nullable = false)
    private TourEntity tour;

    //constructors


    public FavoritoEntity(UsuarioEntity usuario, TourEntity tour) {
        this.usuario = usuario;
        this.tour = tour;
    }

    public FavoritoEntity() {
    }

    //getters y setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public UsuarioEntity getUsuario() {
        return usuario;
    }

    public void setUsuario(UsuarioEntity usuario) {
        this.usuario = usuario;
    }

    public TourEntity getTour() {
        return tour;
    }

    public void setTour(TourEntity tour) {
        this.tour = tour;
    }
}
