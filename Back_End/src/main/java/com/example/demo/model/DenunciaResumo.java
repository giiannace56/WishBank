package com.example.demo.model;

public class DenunciaResumo {
    private String nomeEmpresa;
    private String tipoGolpe;
    private Double valorPerdido; // ⚡ Deve ser Double
    private String dataGolpe; // yyyy-MM-dd
    private String nomeVitima;
    private String emailVitima;

    // Getters e Setters
    public String getNomeEmpresa() { return nomeEmpresa; }
    public void setNomeEmpresa(String nomeEmpresa) { this.nomeEmpresa = nomeEmpresa; }

    public String getTipoGolpe() { return tipoGolpe; }
    public void setTipoGolpe(String tipoGolpe) { this.tipoGolpe = tipoGolpe; }

    public Double getValorPerdido() { return valorPerdido; }
    public void setValorPerdido(Double valorPerdido) { this.valorPerdido = valorPerdido; }

    public String getDataGolpe() { return dataGolpe; }
    public void setDataGolpe(String dataGolpe) { this.dataGolpe = dataGolpe; }

    public String getNomeVitima() { return nomeVitima; }
    public void setNomeVitima(String nomeVitima) { this.nomeVitima = nomeVitima; }

    public String getEmailVitima() { return emailVitima; }
    public void setEmailVitima(String emailVitima) { this.emailVitima = emailVitima; }
}
