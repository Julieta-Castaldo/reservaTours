package com.example.PI_C3_E6_BACK.Jwt;

import org.springframework.security.core.userdetails.UserDetails;

public interface JwtService {
    String extractUserName(String token);
    String generateToken(UserDetails userDetails);
    boolean isTokenValid(String token, UserDetails userDetails, String username);
}
