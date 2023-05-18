package com.example.PI_C3_E6_BACK.persistence.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Imagenes_tours")
public class ImagenesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private int id;
    @Column(name="url_imagen")
    private String url;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="Tours_id", nullable = false)
    private TourEntity tour;

    //constructors
    public ImagenesEntity(String url, TourEntity tour) {
        this.url = url;
        this.tour = tour;
    }

    public ImagenesEntity() {
    }

    //getters y setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public TourEntity getTour() {
        return tour;
    }

    public void setTour(TourEntity tour) {
        this.tour = tour;
    }
}
