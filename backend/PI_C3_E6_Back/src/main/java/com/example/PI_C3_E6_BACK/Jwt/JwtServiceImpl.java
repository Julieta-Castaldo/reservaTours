package com.example.PI_C3_E6_BACK.Jwt;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.time.Clock;
import java.util.Date;

@Service
public class JwtServiceImpl implements JwtService {

    private final JwtUtil jwtUtil;
    private final JwtConfig jwtConfig;
    private final Clock clock;

    public JwtServiceImpl(JwtUtil jwtUtil, JwtConfig jwtConfig, Clock clock) {
        this.jwtUtil = jwtUtil;
        this.jwtConfig = jwtConfig;
        this.clock = clock;
    }

    @Override
    public String extractUserName(String token) {
        return jwtUtil.extractUserName(token, jwtConfig.secretKey());
    }

    @Override
    public String generateToken(UserDetails userDetails) {
        return jwtUtil.generateToken(userDetails,
                clock.millis(),
                jwtConfig.expiration(),
                jwtConfig.secretKey());
    }

    @Override
    public boolean isTokenValid(String token, UserDetails userDetails, String username) {
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return jwtUtil.extractExpiration(token, jwtConfig.secretKey()).before(new Date(clock.millis()));
    }

}
