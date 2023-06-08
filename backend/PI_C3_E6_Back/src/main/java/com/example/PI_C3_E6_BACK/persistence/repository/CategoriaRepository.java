package com.example.PI_C3_E6_BACK.persistence.repository;
import com.example.PI_C3_E6_BACK.persistence.entities.CategoriaEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.TourEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaRepository extends JpaRepository<CategoriaEntity, Integer> {
    @Query("SELECT c FROM CategoriaEntity c WHERE c.nombre = :nombre")
    CategoriaEntity findCategoriaByName(@Param("nombre") String nombre);

    @Query("SELECT c FROM CategoriaEntity c WHERE c.id = :id")
    CategoriaEntity findById(@Param("id") int id);
}
