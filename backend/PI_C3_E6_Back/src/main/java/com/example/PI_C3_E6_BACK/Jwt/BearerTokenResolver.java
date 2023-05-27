package com.example.PI_C3_E6_BACK.Jwt;

import jakarta.servlet.http.HttpServletRequest;

public interface BearerTokenResolver {
    String resolve(HttpServletRequest request);
}