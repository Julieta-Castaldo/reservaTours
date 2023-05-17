package com.example.PI_C3_E6_BACK.persistence.repository;
import com.example.PI_C3_E6_BACK.persistence.entities.ImagenesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImagenesRepository extends JpaRepository<ImagenesEntity, Integer> {
}
