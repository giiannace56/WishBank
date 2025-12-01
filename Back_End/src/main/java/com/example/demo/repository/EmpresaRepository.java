package com.example.demo.repository;

import com.example.demo.model.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface EmpresaRepository extends JpaRepository<Empresa, Long> {

    // Busca empresa pelo nomeEmpresa
    Optional<Empresa> findByNomeFantasia(String nomeEmpresa);

    // Resumo das empresas com quantidade de denúncias e soma dos valores perdidos
    @Query("""
        SELECT e.nomeFantasia, COUNT(d), COALESCE(SUM(d.valorPerdido), 0)
        FROM Denuncia d
        JOIN d.empresa e
        GROUP BY e.nomeFantasia
        ORDER BY COUNT(d) DESC
    """)
    List<Object[]> buscarResumoEmpresas();
}
