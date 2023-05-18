package com.example.PI_C3_E6_BACK.model;

import java.io.Serializable;

public class ImagenesDTO implements Serializable {
    private int id;
    private String url;

    //constructors
    public ImagenesDTO(int id, String url) {
        this.id = id;
        this.url = url;
    }

    public ImagenesDTO() {
    }

    //getters y setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
