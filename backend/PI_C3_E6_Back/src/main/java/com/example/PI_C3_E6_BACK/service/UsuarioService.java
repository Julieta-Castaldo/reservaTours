package com.example.PI_C3_E6_BACK.service;

import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.PageResponseDTO;
import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.SignUpRequest;
import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.UsuarioDTO;
import com.example.PI_C3_E6_BACK.persistence.entities.Rol;
import com.example.PI_C3_E6_BACK.persistence.entities.UsuarioEntity;
import com.example.PI_C3_E6_BACK.persistence.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.ConversionService;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.ErrorResponseException;

@Service
public class UsuarioService implements UserDetailsService {
    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final ConversionService conversionService;
    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder, ConversionService conversionService) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
        this.conversionService = conversionService;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return usuarioRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User Email not found"));
    }

    public UserDetails createUser(SignUpRequest signUpRequest) {
        try{
            //el ESTAVALIDADO en SI por defecto
            UsuarioEntity usuario = new UsuarioEntity(signUpRequest.getUsername(),signUpRequest.getLastname(),signUpRequest.getEmail(),passwordEncoder.encode(signUpRequest.getPassword()), Rol.USER, "SI");
            return usuarioRepository.save(usuario);

        }catch (DataIntegrityViolationException e){
            throw new ErrorResponseException(HttpStatus.CONFLICT,
                    ProblemDetail.forStatusAndDetail(HttpStatus.CONFLICT,
                            "User already exist"),e);
        }
    }
    public PageResponseDTO<UsuarioDTO> getUsers(Pageable pageable) {

        Page<UsuarioEntity> userPage = usuarioRepository.findAll(pageable);
        return new PageResponseDTO<>(
                userPage.getContent().stream()
                        .map(user -> conversionService.convert(user, UsuarioDTO.class)).toList()
                , userPage.getPageable()
                , userPage.getTotalPages());
    }

    public void cambiarRolUsuario(String email) {
        UsuarioEntity usuario = usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User Email not found"));

        usuario.setRol(Rol.ADMIN); // Cambiar el rol a "ADMIN"
        usuarioRepository.save(usuario);
    }
}
