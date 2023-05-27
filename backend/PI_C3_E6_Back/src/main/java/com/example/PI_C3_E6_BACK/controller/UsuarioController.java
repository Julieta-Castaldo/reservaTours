package com.example.PI_C3_E6_BACK.controller;

import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.PageResponseDTO;
import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.UserPageDTO;
import com.example.PI_C3_E6_BACK.model.UsuarioValidacion.UsuarioDTO;
import com.example.PI_C3_E6_BACK.service.UsuarioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Tag(name = "UsuarioController" )
@RequestMapping("User")
public class UsuarioController {
    private final UsuarioService usuarioService;
    @Autowired
    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @Operation(security = { @SecurityRequirement(name = "bearer-key") },summary = "Get page of users",
            parameters = { @Parameter(in = ParameterIn.QUERY, name = "page", description = "Page"),
                    @Parameter(in = ParameterIn.QUERY, name = "size", description = "Size") },
            responses = {
                    @ApiResponse(responseCode = "200",description = "Successful Operation",
                            content = @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = UserPageDTO.class)))})
    @GetMapping("/api/users")
    public PageResponseDTO<UsuarioDTO> getUsers(@PageableDefault(size = 10,page = 0) @ParameterObject Pageable pageable) {
        return usuarioService.getUsers(pageable);
    }
}
