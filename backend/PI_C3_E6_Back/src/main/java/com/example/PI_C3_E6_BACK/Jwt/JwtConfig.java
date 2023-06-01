package com.example.PI_C3_E6_BACK.Jwt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

/*@Component
public record JwtConfig(@Value("${jwt.secret.key}")
                        String secretKey,
                        @Value("${jwt.secret.expiration.in.milliseconds}")
                        Long expiration) {
}*/
@Service
public class JwtConfig {

    private final String secretKey;
    private final Long expiration;

    public JwtConfig(@Value("${jwt.secret.key}") String secretKey,
                     @Value("${jwt.secret.expiration.in.milliseconds}") Long expiration) {
        this.secretKey = secretKey;
        this.expiration = expiration;
        System.out.println("Secret Key: " + secretKey);
        System.out.println("Expiration: " + expiration);
    }

    public String getSecretKey() {
        return secretKey;
    }

    public Long getExpiration() {
        return expiration;
    }
}
