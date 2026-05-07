package com.invoicegenerate.server_side.model;
//ye mere object ko validate karrahi h

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
//ye hybernat ki annotation h jo databse k table se conect karega ye table banata h yaha p or
//ye invoice k name se ek table database m create kar dega
public class Invoice {
    @Id
    //kyunke id humne generate ki ye frontend se ni ati we use
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private  String vendor;
    private String product;
    private Integer amount;
    private String date;
    private String action;

    public Invoice(){}
    public Invoice(Long id, String vendor, String product, Integer amount, String date, String action) {
        this.id = id;
        this.vendor = vendor;
        this.product = product;
        this.amount = amount;
        this.date = date;
        this.action = action;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getVendor() {
        return vendor;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }
}
