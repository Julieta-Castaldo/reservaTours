package com.example.PI_C3_E6_BACK.persistence.repository;

import com.example.PI_C3_E6_BACK.persistence.entities.TourEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface TourRepository extends JpaRepository<TourEntity, Integer> {

    @Query("SELECT t FROM TourEntity t WHERE t.id = :id")
    TourEntity findTourById(@Param("id") int id);


    @Query("SELECT t FROM TourEntity t WHERE t.nombre = :nombre")
    TourEntity findTourByName(@Param("nombre") String nombre);


    @Query("SELECT t FROM TourEntity t JOIN t.categoria c WHERE c.id = :idCategoria")
    List<TourEntity> findToursByCategoria(@Param("idCategoria") int idCategoria);

    @Query("SELECT t FROM TourEntity t JOIN t.ciudad c WHERE c.id = :idCiudad")
    List<TourEntity> findToursByCiudad(@Param("idCiudad") int idCiudad);

    Page<TourEntity> findByCategoria_id(int Categoria_id, Pageable pageable);

    @Query("SELECT t FROM TourEntity t LEFT JOIN FechaOcupadaEntity f on f.tour.id = t.id WHERE f.fechaOcupada <> :fechaDisponible OR f.fechaOcupada IS NULL")
    List<TourEntity> findToursByFecha(@Param("fechaDisponible") LocalDate fechaDisponible);


/*
    @Query("SELECT t FROM TourEntity t " +
            "WHERE (:ciudadId IS NULL OR t.ciudad.id = :ciudadId) " +
            "AND (:fechaDisponible IS NULL OR EXISTS (SELECT fechas FROM FechaOcupadaEntity fechas " +
            "WHERE fechas.tour = t " +
            "AND fechas.fechaOcupada = :fechaDisponible)) " +
            "AND (:categoriaId IS NULL OR t.categoria.id = :categoriaId) " +
            "AND EXISTS (SELECT fechas FROM FechaOcupadaEntity fechas " +
            "WHERE fechas.tour = t " +
            "AND fechas.fechaOcupada >= :fechaDesde " +
            "AND fechas.fechaOcupada <= :fechaHasta)")
    List<TourEntity> buscarToursDinamicamente(@Param("ciudadId") Integer ciudadId,
                                 @Param("fechaDisponible") LocalDate fechaDisponible,
                                 @Param("categoriaId") Integer categoriaId,
                                 @Param("fechaDesde") LocalDate fechaDesde,
                                 @Param("fechaHasta") LocalDate fechaHasta);*/


}
