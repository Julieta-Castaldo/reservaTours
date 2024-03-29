package com.example.PI_C3_E6_BACK.Jwt;

import org.springframework.security.core.userdetails.UserDetails;

import java.util.Date;

public interface JwtUtil {
    String extractUserName(String token,String secretKey);
    String generateToken(UserDetails userDetails,
                         long systemCurrentMillis,
                         long configuredExpirationTimeInMillis,
                         String secretKey);

    Date extractExpiration(String token,String secretKey);

}
