package com.example.demo.controller;

import com.example.demo.model.Denuncia;
import com.example.demo.model.DenunciaResumo;
import com.example.demo.service.DenunciaService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/denuncias")
@CrossOrigin(origins = "http://localhost:5173") // ou "*" se quiser liberar todas as origens
public class DenunciaController {

    private final DenunciaService denunciaService;

    public DenunciaController(DenunciaService denunciaService) {
        this.denunciaService = denunciaService;
    }

    // Apenas para teste da API
    @GetMapping
    public String status() {
        return "API de denúncias funcionando";
    }

    // Endpoint para registrar denúncia
    @PostMapping
    public Denuncia registrar(@RequestBody DenunciaResumo resumo) {
        // Chama o service que converte o DTO em entidade Denuncia e salva
        return denunciaService.registrar(resumo);
    }
}
