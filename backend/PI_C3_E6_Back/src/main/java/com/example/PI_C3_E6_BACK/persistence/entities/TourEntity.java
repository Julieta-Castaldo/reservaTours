package com.example.PI_C3_E6_BACK.persistence.entities;
import jakarta.persistence.*;
import org.hibernate.annotations.Type;
import java.time.LocalDate;

@Entity
@Table(name = "Tours")
public class TourEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "nombre")
    private String nombre;
    @Column(name = "descripcion")
    private String descripcion;
    @Column(name = "fechaSalida")
    @Temporal(TemporalType.DATE)
    private LocalDate fechaSalida;
    @Column(name = "fechaLlegada")
    @Temporal(TemporalType.DATE)
    private LocalDate fechaLlegada;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="Categoria_id", nullable = false)
    private CategoriaEntity categoria;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="Ciudades_id", nullable = false)
    private CiudadEntity ciudad;

    //constructors

    public TourEntity(String nombre, String descripcion, LocalDate fechaSalida, LocalDate fechaLlegada, CategoriaEntity categoria, CiudadEntity ciudad) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaSalida = fechaSalida;
        this.fechaLlegada = fechaLlegada;
        this.categoria = categoria;
        this.ciudad = ciudad;
    }

    public TourEntity() {
    }

    //getters y setters

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

    public LocalDate getFechaSalida() {
        return fechaSalida;
    }

    public void setFechaSalida(LocalDate fechaSalida) {
        this.fechaSalida = fechaSalida;
    }

    public LocalDate getFechaLlegada() {
        return fechaLlegada;
    }

    public void setFechaLlegada(LocalDate fechaLlegada) {
        this.fechaLlegada = fechaLlegada;
    }

    public CategoriaEntity getCategoria() {
        return categoria;
    }

    public void setCategoria(CategoriaEntity categoria) {
        this.categoria = categoria;
    }

    public CiudadEntity getCiudad() {
        return ciudad;
    }

    public void setCiudad(CiudadEntity ciudad) {
        this.ciudad = ciudad;
    }
}
