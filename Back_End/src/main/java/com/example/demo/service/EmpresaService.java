package com.example.demo.service;

import com.example.demo.model.Empresa;
import com.example.demo.model.Usuario;
import com.example.demo.repository.EmpresaRepository;
import com.example.demo.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpresaService {

    private final EmpresaRepository empresaRepository;
    private final UsuarioRepository usuarioRepository;

    public EmpresaService(EmpresaRepository empresaRepository, UsuarioRepository usuarioRepository) {
        this.empresaRepository = empresaRepository;
        this.usuarioRepository = usuarioRepository;
    }

    public Empresa cadastrarEmpresa(Long usuarioId, Empresa empresa) {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        empresa.setUsuario(usuario);
        return empresaRepository.save(empresa);
    }

    public List<Empresa> listarEmpresas(Long usuarioId) {
        return empresaRepository.findByUsuarioId(usuarioId);
    }
}
