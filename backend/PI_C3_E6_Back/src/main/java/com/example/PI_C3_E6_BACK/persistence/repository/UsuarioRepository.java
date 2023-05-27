package com.example.PI_C3_E6_BACK.persistence.repository;

import com.example.PI_C3_E6_BACK.persistence.entities.TourEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.UsuarioEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@Transactional
public interface UsuarioRepository extends JpaRepository<UsuarioEntity, Integer> {

    Optional<UsuarioEntity> findByEmail(String email);
    Optional<UsuarioEntity> findByNombre(String nombre);
}
