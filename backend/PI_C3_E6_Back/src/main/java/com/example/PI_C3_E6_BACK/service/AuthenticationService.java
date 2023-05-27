package com.example.PI_C3_E6_BACK.service;

import com.example.PI_C3_E6_BACK.Jwt.JwtService;
import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.AuthenticationResponse;
import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.LoginRequest;
import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.SignUpRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    private final AuthenticationManager authenticationManager;
    private final UsuarioService userService;
    private final JwtService jwtService;

    @Autowired
    public AuthenticationService(AuthenticationManager authenticationManager, UsuarioService userService, JwtService jwtService) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.jwtService = jwtService;
    }

    public AuthenticationResponse login(LoginRequest loginRequest) {

        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(),
                        loginRequest.getPassword()));

        String jwt =jwtService
                .generateToken((UserDetails) authentication.getPrincipal());

        AuthenticationResponse authenticationResponse = new AuthenticationResponse(jwt);
        return authenticationResponse;
    }

    public AuthenticationResponse signUp(SignUpRequest signUpRequest) {
        UserDetails userDetails = userService.createUser(signUpRequest);
        AuthenticationResponse authenticationResponse = new AuthenticationResponse(jwtService.generateToken(userDetails));
        return authenticationResponse;
    }
}
