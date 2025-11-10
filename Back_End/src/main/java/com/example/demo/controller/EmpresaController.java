package com.example.demo.controller;

import com.example.demo.model.Empresa;
import com.example.demo.service.EmpresaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/empresa")
public class EmpresaController {

    private final EmpresaService empresaService;

    public EmpresaController(EmpresaService empresaService) {
        this.empresaService = empresaService;
    }

    @PostMapping("/{usuarioId}/cadastrar")
    public ResponseEntity<?> cadastrarEmpresa(
            @PathVariable Long usuarioId,
            @RequestBody Empresa empresa) {
        try {
            Empresa nova = empresaService.cadastrarEmpresa(usuarioId, empresa);
            return ResponseEntity.ok(nova);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/{usuarioId}/listar")
    public ResponseEntity<List<Empresa>> listarEmpresas(@PathVariable Long usuarioId) {
        return ResponseEntity.ok(empresaService.listarEmpresas(usuarioId));
    }
}
