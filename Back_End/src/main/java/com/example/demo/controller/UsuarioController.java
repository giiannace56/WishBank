package com.example.demo.controller;

import com.example.demo.model.Usuario;
import com.example.demo.service.UsuarioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UsuarioService usuarioService;

    public AuthController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping("/cadastro")
    public ResponseEntity<?> cadastrar(@RequestBody Usuario usuario) {
        try {
            Usuario salvo = usuarioService.cadastrar(usuario);
            salvo.setSenha(null);
            return ResponseEntity.ok(salvo);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario req) {
        Optional<Usuario> autenticado = usuarioService.autenticar(req.getEmail(), req.getSenha());
        return autenticado
                .<ResponseEntity<?>>map(u -> {
                    u.setSenha(null);
                    return ResponseEntity.ok(u);
                })
                .orElse(ResponseEntity.status(401).body("Credenciais inválidas"));
    }
}
