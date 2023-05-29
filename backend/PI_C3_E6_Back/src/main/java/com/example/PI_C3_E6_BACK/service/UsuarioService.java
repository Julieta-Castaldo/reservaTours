package com.example.PI_C3_E6_BACK.service;

import com.example.PI_C3_E6_BACK.configuration.MapperConfig;
import com.example.PI_C3_E6_BACK.exceptions.ResourceNotFoundException;
import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.PageResponseDTO;
import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.SignUpRequest;
import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.UsuarioDTO;
import com.example.PI_C3_E6_BACK.persistence.entities.Rol;
import com.example.PI_C3_E6_BACK.persistence.entities.UsuarioEntity;
import com.example.PI_C3_E6_BACK.persistence.repository.UsuarioRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.ConversionService;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.ErrorResponseException;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService implements UserDetailsService {
    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final ConversionService conversionService;
    private static final Logger log = LogManager.getLogger(TourService.class);
    @Autowired
    private MapperConfig modelMapper;
    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder, ConversionService conversionService) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
        this.conversionService = conversionService;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return usuarioRepository.findByEmail(email);
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

        List<UsuarioDTO> usuarioDTOList = userPage.getContent().stream()
                .map(this::convertToUsuarioDTO)
                .toList();
        System.out.println(usuarioDTOList.size());
        return new PageResponseDTO<>(
                usuarioDTOList
                , userPage.getPageable()
                , userPage.getTotalPages());
    }

    private UsuarioDTO convertToUsuarioDTO(UsuarioEntity user) {
        UsuarioDTO usuarioDTO =  modelMapper.getModelMapper().map(user, UsuarioDTO.class);
        usuarioDTO.setId(user.getId());
        usuarioDTO.setUsername(user.getNombre());
        usuarioDTO.setLastname(user.getApellido());
        usuarioDTO.setEmail(user.getEmail());
        usuarioDTO.setRol(user.getRol().name());
        return usuarioDTO;
    }

    public ResponseEntity<UsuarioDTO> cambiarRolUsuario(int id) {
        try {
            UsuarioEntity usuario = usuarioRepository.findById(id);
            if (usuario.getRol().name()=="USER") {
                usuario.setRol(Rol.ADMIN); // Cambiar el rol a "ADMIN"
            }else if (usuario.getRol().name()=="ADMIN") {
                usuario.setRol(Rol.USER); // Cambiar el rol a "USER"
            }
            UsuarioDTO usuarioDTO = convertToUsuarioDTO(usuario);
            usuarioRepository.save(usuario);
            return ResponseEntity.ok(usuarioDTO);
        }catch (Exception ex) {
            log.error(ex.getMessage());
            return ResponseEntity.badRequest().body(null);
        }

    }
}
