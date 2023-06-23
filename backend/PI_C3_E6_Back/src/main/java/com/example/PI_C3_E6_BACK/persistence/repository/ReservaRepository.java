package com.example.PI_C3_E6_BACK.persistence.repository;

import com.example.PI_C3_E6_BACK.persistence.entities.ReservaEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.TourEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservaRepository extends JpaRepository<ReservaEntity, Integer> {

    @Query("SELECT r FROM ReservaEntity r WHERE r.id = :id")
    ReservaEntity findReservaById(@Param("id") int id);

    @Query("SELECT r FROM ReservaEntity r JOIN r.usuario u WHERE u.id = :idUsuario")
    List<ReservaEntity> findReservaByUser(@Param("idUsuario") int idUsuario);

}
