package com.example.demo.service;

import com.example.demo.model.EmpresaResumo;
import com.example.demo.repository.EmpresaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmpresaService {

    private final EmpresaRepository empresaRepository;

    public EmpresaService(EmpresaRepository empresaRepository) {
        this.empresaRepository = empresaRepository;
    }

    public List<EmpresaResumo> listarResumoEmpresas() {
        // busca raw data do banco: [nome, COUNT(d), SUM(d.valorPerdido)]
        List<Object[]> resumo = empresaRepository.buscarResumoEmpresas();

        return resumo.stream()
                .map(r -> new EmpresaResumo(
                        null, // id não estamos usando no resumo
                        (String) r[0],               // nome da empresa
                        ((Long) r[1]).intValue(),    // número de denúncias
                        r[2] != null ? ((Double) r[2]) : 0.0 // total perdido
                ))
                .collect(Collectors.toList());
    }
}
