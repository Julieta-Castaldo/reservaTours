package com.example.PI_C3_E6_BACK.model.UsuarioValidacion;
import jakarta.validation.constraints.*;

public class SignUpRequest {
    @NotEmpty
    @Size(min = 4, max = 50)
    private String username;

    @NotEmpty
    @Size(min = 4, max = 50)
    private String lastname;

    @NotEmpty
    @Size(min = 4, max = 50)
    private String email;

    @NotEmpty
    @Size(min = 4, max = 10)
    private String password;

    public SignUpRequest(String username, String lastname, String email, String password) {
        this.username = username;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }

    public SignUpRequest() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
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
