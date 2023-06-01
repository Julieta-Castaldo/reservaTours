package com.example.PI_C3_E6_BACK.persistence.repository;

import com.example.PI_C3_E6_BACK.persistence.entities.CaracteristicaEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.CategoriaEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.TourEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CaracteristicaRepository extends JpaRepository<CaracteristicaEntity, Integer> {
    @Query("SELECT c FROM CaracteristicaEntity c JOIN c.tour t WHERE t.id = :idTour")
    CaracteristicaEntity findCaracteristicaByTour(@Param("idTour") int idTour);
}
