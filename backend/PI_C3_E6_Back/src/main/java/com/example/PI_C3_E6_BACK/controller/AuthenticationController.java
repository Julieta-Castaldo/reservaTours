package com.example.PI_C3_E6_BACK.controller;

import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.AuthenticationResponse;
import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.LoginRequest;
import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.SignUpRequest;
import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.UserLoguinResponse;
import com.example.PI_C3_E6_BACK.service.AuthenticationService;
import com.example.PI_C3_E6_BACK.service.EmailService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.annotation.security.PermitAll;
import jakarta.validation.Valid;
import jdk.jfr.ContentType;
import org.apache.coyote.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@Tag(name = "Authentication")
public class AuthenticationController {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    private final AuthenticationService authenticationService;

    @Autowired
    private EmailService emailService;

    @Autowired
    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PermitAll
    /*@Operation(summary = "Login with user and password and returns JWT token", responses = {
            @ApiResponse(responseCode = "200",description = "Successful Operation", content = @Content),
            @ApiResponse(responseCode = "401", description = "Authentication Failure", content = @Content)})*/
    @PostMapping("/api/login")
    @ResponseBody
    public ResponseEntity<UserLoguinResponse> login(@RequestBody @Valid @NonNull LoginRequest loginRequest) {
        logger.info(loginRequest.getPassword());
        logger.info(loginRequest.getEmail());

        try {
            UserLoguinResponse response = authenticationService.login(loginRequest);
            System.out.println("RESPONSE: " + response);
            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(response);
        }catch (Exception ex){
            UserLoguinResponse badResponse = new UserLoguinResponse("Mail o Contraseña incorrectos");
            return ResponseEntity.badRequest()
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(badResponse);
        }
    }
    @PermitAll
    @Operation(summary = "Sign up and returns JWT token"
            /*responses = {
            @ApiResponse(responseCode = "200",description = "Successful Operation", content = @Content),
            @ApiResponse(responseCode = "409", description = "User already exists", content = @Content)}*/)
    @PostMapping("/api/sign-up")
    @ResponseBody
    public ResponseEntity<UserLoguinResponse> signUp(@RequestBody @Valid @NonNull SignUpRequest signUpRequest) {
        UserLoguinResponse response = authenticationService.signUp(signUpRequest);
        emailService.sendMail(signUpRequest.getEmail(), "Valida tu cuenta", "Haz clic en este enlace: http://127.0.0.1:5173/");
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(response);
    }
}
