package com.example.PI_C3_E6_BACK.configuration;

import com.example.PI_C3_E6_BACK.Jwt.JwtRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

import static com.example.PI_C3_E6_BACK.persistence.entities.Rol.ADMIN;
import static com.example.PI_C3_E6_BACK.persistence.entities.Rol.USER;

@Configuration
@EnableWebSecurity
//@EnableMethodSecurity
public class SecurityConfiguration {

    private final JwtRequestFilter jwtRequestFilter;
    @Autowired
    public SecurityConfiguration(JwtRequestFilter jwtRequestFilter) {
        this.jwtRequestFilter = jwtRequestFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .cors(Customizer.withDefaults())
                .csrf(AbstractHttpConfigurer::disable)

                .authorizeHttpRequests(authorizeHttpRequestsCustomizer -> authorizeHttpRequestsCustomizer
                        .requestMatchers(HttpMethod.POST, "/api/login").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/sign-up").permitAll()
                        .requestMatchers(HttpMethod.GET, "/Categoria/todos").permitAll()
                        .requestMatchers(HttpMethod.GET, "/Tour/porId/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/Tour/pages**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/Tour/todos").permitAll()
                        .requestMatchers(HttpMethod.GET, "/Tour/todosAleatorio").permitAll()
                        .requestMatchers(HttpMethod.GET, "/Tour/porCategoria/**").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/Tour/**").hasAuthority(ADMIN.name())
                        .requestMatchers(HttpMethod.POST, "/Tour/agregar").hasAuthority(ADMIN.name())
                        .requestMatchers(HttpMethod.POST, "/Categoria/agregar").hasAuthority(ADMIN.name())
                        .requestMatchers(HttpMethod.GET, "/User/api/users").hasAuthority(ADMIN.name())
                        .requestMatchers(HttpMethod.PUT, "/User/**").hasAuthority(ADMIN.name())
                        .requestMatchers(HttpMethod.GET, "/swagger-ui/**", "/v3/api-docs/**").permitAll()
                        .anyRequest().authenticated())
                .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class)
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("*"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowedMethods(List.of("*"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
