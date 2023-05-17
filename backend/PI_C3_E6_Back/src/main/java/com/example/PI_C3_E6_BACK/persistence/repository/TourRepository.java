package com.example.PI_C3_E6_BACK.persistence.repository;

import com.example.PI_C3_E6_BACK.persistence.entities.TourEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TourRepository extends JpaRepository<TourEntity, Integer> {

    @Query("from TourEntity t where t.id = ?1")
    TourEntity findTourById(int id);

    @Query("from TourEntity t where t.nombre = ?1")
    TourEntity findTourByName(String nombre);

}
