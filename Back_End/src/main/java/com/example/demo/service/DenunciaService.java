package com.example.demo.service;

import com.example.demo.model.Denuncia;
import com.example.demo.model.DenunciaResumo;
import com.example.demo.model.Empresa;
import com.example.demo.repository.DenunciaRepository;
import com.example.demo.repository.EmpresaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;

@Service
public class DenunciaService {

    private final DenunciaRepository denunciaRepository;
    private final EmpresaRepository empresaRepository;

    public DenunciaService(DenunciaRepository denunciaRepository, EmpresaRepository empresaRepository) {
        this.denunciaRepository = denunciaRepository;
        this.empresaRepository = empresaRepository;
    }

    @Transactional
    public Denuncia registrar(DenunciaResumo resumo) {
        // Busca a empresa pelo nome; se não existir, cria e persiste imediatamente
        Empresa empresa = empresaRepository.findByNomeFantasia(resumo.getNomeEmpresa())
                .orElseGet(() -> {
                    Empresa nova = new Empresa();
                    nova.setNomeFantasia(resumo.getNomeEmpresa());
                    return empresaRepository.saveAndFlush(nova); // garante ID gerado
                });

        // Converte a data enviada como string para LocalDate
        LocalDate dataGolpe;
        try {
            dataGolpe = LocalDate.parse(resumo.getDataGolpe());
        } catch (DateTimeParseException e) {
            throw new IllegalArgumentException("Data do golpe inválida: " + resumo.getDataGolpe());
        }

        // Cria a denúncia
        Denuncia denuncia = new Denuncia();
        denuncia.setEmpresa(empresa); // FK obrigatória
        denuncia.setTipoGolpe(resumo.getTipoGolpe());
        denuncia.setValorPerdido(resumo.getValorPerdido() != null ? resumo.getValorPerdido() : 0.0);
        denuncia.setNomeVitima(resumo.getNomeVitima());
        denuncia.setEmailVitima(resumo.getEmailVitima());
        denuncia.setDataGolpe(dataGolpe);

        // Salva a denúncia no banco
        return denunciaRepository.save(denuncia);
    }
}
