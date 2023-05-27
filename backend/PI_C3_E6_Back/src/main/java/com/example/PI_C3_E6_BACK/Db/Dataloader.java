package com.example.PI_C3_E6_BACK.Db;

import com.example.PI_C3_E6_BACK.persistence.entities.Rol;
import com.example.PI_C3_E6_BACK.persistence.entities.UsuarioEntity;
import com.example.PI_C3_E6_BACK.persistence.repository.UsuarioRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class Dataloader implements CommandLineRunner {
    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    @Autowired
    public Dataloader(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        //if (usuarioRepository.findByEmail("admin@admin.com") == null) {
            UsuarioEntity admin = new UsuarioEntity();
                    admin.setNombre("admin");
                    admin.setApellido("admin");
                    admin.setEmail("admin@admin.com");
                    admin.setContrasena(passwordEncoder.encode("admin"));
                    admin.setRol(Rol.ADMIN);
                    admin.setEstaValidado("SI");

            usuarioRepository.save(admin);
        //}
    }
}
