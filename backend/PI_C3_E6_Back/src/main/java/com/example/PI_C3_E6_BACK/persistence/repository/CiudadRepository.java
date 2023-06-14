package com.example.PI_C3_E6_BACK.persistence.repository;

import com.example.PI_C3_E6_BACK.persistence.entities.CategoriaEntity;
import com.example.PI_C3_E6_BACK.persistence.entities.CiudadEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CiudadRepository extends JpaRepository<CiudadEntity, Integer> {

    CiudadEntity findById(int id);
    @Query("SELECT c FROM CiudadEntity c WHERE c.nombreCiudad = :nombre")
    CiudadEntity findByNombreCiudad(@Param("nombre") String nombre);

    @Query("SELECT c FROM CiudadEntity c WHERE c.nombreCiudad LIKE %:nombre%")
    List<CiudadEntity> findLikeNombreCiudad(@Param("nombre") String nombre);

    @Query("SELECT c FROM CiudadEntity c WHERE c.latitud = :latitud AND c.longitud = :longitud")
    CiudadEntity findByCoordenadas(@Param("latitud") double latitud, @Param("longitud") double longitud);


}
