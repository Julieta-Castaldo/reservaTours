package com.example.PI_C3_E6_BACK.controller;

import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.AuthenticationResponse;
import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.LoginRequest;
import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.SignUpRequest;
import com.example.PI_C3_E6_BACK.service.AuthenticationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.annotation.security.PermitAll;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@Tag(name = "Authentication")
public class AuthenticationController {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    private final AuthenticationService authenticationService;
    @Autowired
    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PermitAll
    @Operation(summary = "Login with user and password and returns JWT token", responses = {
            @ApiResponse(responseCode = "200",description = "Successful Operation", content = @Content),
            @ApiResponse(responseCode = "401", description = "Authentication Failure", content = @Content)})
    @PostMapping("/api/login")
    public AuthenticationResponse login(@RequestBody @Valid @NonNull LoginRequest loginRequest) {
        logger.info(loginRequest.getPassword());
        logger.info(loginRequest.getEmail());
        AuthenticationResponse response = authenticationService.login(loginRequest);
        return response;
    }
    @PermitAll
    @Operation(summary = "Sign up and returns JWT token", responses = {
            @ApiResponse(responseCode = "200",description = "Successful Operation", content = @Content),
            @ApiResponse(responseCode = "409", description = "User already exists", content = @Content)})
    @PostMapping("/api/sign-up")
    public AuthenticationResponse signUp(@RequestBody @Valid @NonNull SignUpRequest signUpRequest) {

        return authenticationService.signUp(signUpRequest);
    }
}
