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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="Categoria_id", nullable = false)
    private CategoriaEntity categoria;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="Ciudades_id", nullable = false)
    private CiudadEntity ciudad;

    @Column(name = "precio")
    private double precio;

    @Column(name = "duracion")
    private int duracion;


    //constructors


    public TourEntity(String nombre, String descripcion, CategoriaEntity categoria, CiudadEntity ciudad, double precio, int duracion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.precio = precio;
        this.duracion = duracion;
    }

    public TourEntity() {
    }

    //getters y setters

    public int getDuracion() {
        return duracion;
    }

    public void setDuracion(int duracion) {
        this.duracion = duracion;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

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
