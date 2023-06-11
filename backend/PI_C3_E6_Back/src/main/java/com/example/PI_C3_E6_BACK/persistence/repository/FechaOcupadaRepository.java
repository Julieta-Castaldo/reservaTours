package com.example.PI_C3_E6_BACK.persistence.repository;

import com.example.PI_C3_E6_BACK.persistence.entities.FechaOcupadaEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.ImagenesEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.UsuarioEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface FechaOcupadaRepository extends JpaRepository<FechaOcupadaEntity, Integer> {

    //Con este busco todas las fechas ocupadas para un tour en especifico
    @Query("SELECT f FROM FechaOcupadaEntity f WHERE f.tour.id = :idTour")
    List<FechaOcupadaEntity> findFechasOcupadasByTourId(@Param("idTour") int idTour);

    //Con este, JPA Repository me verifica si existe una fecha ocupada para un tour específico
    // devuelve true o false
    boolean existsByTourIdAndFechaOcupada(int tourId, LocalDate fechaOcupada);

}
