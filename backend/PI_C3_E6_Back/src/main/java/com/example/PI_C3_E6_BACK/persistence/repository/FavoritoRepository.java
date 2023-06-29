package com.example.PI_C3_E6_BACK.persistence.repository;
import com.example.PI_C3_E6_BACK.persistence.entities.FavoritoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoritoRepository extends JpaRepository<FavoritoEntity, Integer> {

    @Query("SELECT f FROM FavoritoEntity f JOIN f.usuario u WHERE u.id = :idUsuario")
    List<FavoritoEntity> findFavoritosByUser(@Param("idUsuario") int idUsuario);
}
