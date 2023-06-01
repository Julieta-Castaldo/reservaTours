package com.example.PI_C3_E6_BACK.service;

import com.example.PI_C3_E6_BACK.Jwt.JwtService;
import com.example.PI_C3_E6_BACK.configuration.MapperConfig;
import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.*;
import com.example.PI_C3_E6_BACK.persistence.entities.UsuarioEntity;
import com.example.PI_C3_E6_BACK.persistence.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationService {
    private final AuthenticationManager authenticationManager;
    private final UsuarioService userService;
    private final JwtService jwtService;
    private final UsuarioRepository usuarioRepository;
    @Autowired
    private MapperConfig modelMapper;

    @Autowired
    public AuthenticationService(AuthenticationManager authenticationManager, UsuarioService userService, JwtService jwtService, UsuarioRepository usuarioRepository) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.jwtService = jwtService;
        this.usuarioRepository = usuarioRepository;
    }

    public UserLoguinResponse login(LoginRequest loginRequest) {
        System.out.println("loginREQUEST: " + loginRequest.getEmail() + ", " + loginRequest.getPassword());

        try {
            Authentication authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword() ));
        }catch (Exception ex){
            System.out.println(ex.getMessage());
        }
        UserDetails userDetails = userService.loadUserByUsername(loginRequest.getEmail());
        String token =jwtService.generateToken(userDetails);
        UsuarioDTO usuarioDTO  =  modelMapper.getModelMapper().map(usuarioRepository.findByEmail(loginRequest.getEmail()), UsuarioDTO.class);
        AuthenticationResponse authenticationResponse = new AuthenticationResponse(token);
        return new UserLoguinResponse(authenticationResponse, usuarioDTO);
    }

    public UserLoguinResponse signUp(SignUpRequest signUpRequest) {
        UserDetails userDetails = userService.createUser(signUpRequest);
        UsuarioDTO usuarioDTO  =  modelMapper.getModelMapper().map(usuarioRepository.findByEmail(signUpRequest.getEmail()), UsuarioDTO.class);
        AuthenticationResponse authenticationResponse = new AuthenticationResponse(jwtService.generateToken(userDetails));
        return new UserLoguinResponse(authenticationResponse, usuarioDTO);
    }
}
