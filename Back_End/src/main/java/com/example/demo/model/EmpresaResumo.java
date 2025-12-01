package com.example.demo.model;

public class EmpresaResumo {

    private Long id;
    private String nome;
    private int denuncias;
    private double total;

    public EmpresaResumo(Long id, String nome, int denuncias, double total) {
        this.id = id;
        this.nome = nome;
        this.denuncias = denuncias;
        this.total = total;
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public int getDenuncias() {
        return denuncias;
    }

    public double getTotal() {
        return total;
    }
}
