package com.example.demo.service;

import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public Usuario cadastrar(Usuario usuario) {
        usuarioRepository.findByEmail(usuario.getEmail()).ifPresent(u -> {
            throw new RuntimeException("Email já cadastrado");
        });
        usuario.setSenha(encoder.encode(usuario.getSenha()));
        return usuarioRepository.save(usuario);
    }

    public Optional<Usuario> autenticar(String email, String senha) {
        Optional<Usuario> usuario = usuarioRepository.findByEmail(email);
        if (usuario.isPresent() && encoder.matches(senha, usuario.get().getSenha())) {
            return usuario;
        }
        return Optional.empty();
    }
}
