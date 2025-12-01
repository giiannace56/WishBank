package com.example.demo.controller;

import com.example.demo.model.EmpresaResumo;
import com.example.demo.service.EmpresaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/empresas")
@CrossOrigin(origins = "*")
public class EmpresaController {

    private final EmpresaService empresaService;

    public EmpresaController(EmpresaService empresaService) {
        this.empresaService = empresaService;
    }

    @GetMapping
    public List<EmpresaResumo> listarResumoEmpresas() {
        return empresaService.listarResumoEmpresas();
    }
}
