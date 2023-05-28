package com.example.PI_C3_E6_BACK.model.UsuarioValidacion;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Builder;

import java.io.Serializable;

@Builder
public class LoginRequest implements Serializable {
    @NotEmpty
    @Email
    private String email;

    @NotEmpty(message = "Invalid password: Empty password")
    @Size(min = 4,max = 10)
    private String password;

    public LoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public LoginRequest() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
