package com.example.demo.controller;

import com.example.demo.model.Usuario;
import com.example.demo.service.UsuarioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:5173")

public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping("/cadastro")
    public ResponseEntity<?> cadastrar(@RequestBody Usuario usuario) {
        try {
            Usuario novoUsuario = usuarioService.cadastrar(usuario);
            return ResponseEntity.ok(novoUsuario);
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

    @GetMapping
    public String status() {
        return "API de denúncias funcionando";
    }
}
