package com.example.PI_C3_E6_BACK.Jwt;
import io.micrometer.common.util.StringUtils;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {

    private final UserDetailsService userDetailsService;
    private final JwtService jwtService;
    private final BearerTokenResolver bearerTokenResolver;
    @Autowired
    public JwtRequestFilter(UserDetailsService userDetailsService, JwtService jwtService, BearerTokenResolver bearerTokenResolver) {
        this.userDetailsService = userDetailsService;
        this.jwtService = jwtService;
        this.bearerTokenResolver = bearerTokenResolver;
    }

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request,
                                    @NonNull HttpServletResponse response,
                                    @NonNull FilterChain filterChain) throws ServletException, IOException {
        final String jwt = bearerTokenResolver.resolve(request);

        if (jwt != null) {
            String username = jwtService.extractUserName(jwt);

            if (StringUtils.isNotEmpty(username) && null == SecurityContextHolder.getContext().getAuthentication()) {
                UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
                if (jwtService.isTokenValid(jwt,userDetails,username)) {
                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                            new UsernamePasswordAuthenticationToken(
                                    userDetails,
                            null,
                                    userDetails.getAuthorities());

                    usernamePasswordAuthenticationToken.setDetails(
                            new WebAuthenticationDetailsSource().buildDetails(request));

                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                }
            }
        }

        filterChain.doFilter(request, response);
    }

}
