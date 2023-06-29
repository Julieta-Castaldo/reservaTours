package com.example.PI_C3_E6_BACK.model;

import java.io.Serializable;
import java.util.List;

public class FavoritoDTO implements Serializable {
    private int idUsuario;
    private List<Integer> listaFavoritos;

    public FavoritoDTO(int idUsuario, List<Integer> listaFavoritos) {
        this.idUsuario = idUsuario;
        this.listaFavoritos = listaFavoritos;
    }

    public FavoritoDTO() {
    }

    public int getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

    public List<Integer> getListaFavoritos() {
        return listaFavoritos;
    }

    public void setListaFavoritos(List<Integer> listaFavoritos) {
        this.listaFavoritos = listaFavoritos;
    }
}
