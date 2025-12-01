package com.example.demo.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Denuncia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomeVitima;
    private String emailVitima;
    private String tipoGolpe;
    private Double valorPerdido;

    private LocalDate dataGolpe; // ← O TIPO CORRETO!

    @ManyToOne
    @JoinColumn(name = "empresa_id", nullable = false)
    @JsonIgnore
    private Empresa empresa;

    // Getters e Setters

    public Long getId() {
        return id;
    }

    public String getNomeVitima() {
        return nomeVitima;
    }

    public void setNomeVitima(String nomeVitima) {
        this.nomeVitima = nomeVitima;
    }

    public String getEmailVitima() {
        return emailVitima;
    }

    public void setEmailVitima(String emailVitima) {
        this.emailVitima = emailVitima;
    }

    public String getTipoGolpe() {
        return tipoGolpe;
    }

    public void setTipoGolpe(String tipoGolpe) {
        this.tipoGolpe = tipoGolpe;
    }

    public Double getValorPerdido() {
        return valorPerdido;
    }

    public void setValorPerdido(Double valorPerdido) {
        this.valorPerdido = valorPerdido;
    }

    public LocalDate getDataGolpe() {
        return dataGolpe;
    }

    public void setDataGolpe(LocalDate dataGolpe) {
        this.dataGolpe = dataGolpe;
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
    }
}
