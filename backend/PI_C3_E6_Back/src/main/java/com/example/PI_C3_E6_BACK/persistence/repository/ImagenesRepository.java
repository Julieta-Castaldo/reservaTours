package com.example.PI_C3_E6_BACK.persistence.repository;
import com.example.PI_C3_E6_BACK.persistence.entities.ImagenesEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.TourEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImagenesRepository extends JpaRepository<ImagenesEntity, Integer> {
    @Query("SELECT i FROM ImagenesEntity i WHERE tour.id = :tourId")
    List<ImagenesEntity> findImgById(@Param("tourId") int tourId);

}
