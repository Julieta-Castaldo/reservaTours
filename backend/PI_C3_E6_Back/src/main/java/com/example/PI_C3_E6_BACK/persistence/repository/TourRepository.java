package com.example.PI_C3_E6_BACK.persistence.repository;

import com.example.PI_C3_E6_BACK.persistence.entities.TourEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TourRepository extends JpaRepository<TourEntity, Integer> {

    @Query("SELECT t FROM TourEntity t WHERE t.id = :id")
    TourEntity findTourById(@Param("id") int id);

    @Query("SELECT t FROM TourEntity t WHERE t.nombre = :nombre")
    TourEntity findTourByName(@Param("nombre") String nombre);

    @Query("SELECT t FROM TourEntity t JOIN t.categoria c WHERE c.nombre = :nombreCategoria")
    List<TourEntity> findToursByCategoria(@Param("nombreCategoria") String nombreCategoria);



}
