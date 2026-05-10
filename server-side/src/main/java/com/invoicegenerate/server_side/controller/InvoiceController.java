package com.invoicegenerate.server_side.controller;

//frontend se jo request bhej raha hu m wo yaha handle ho rahi h jab api hit hogi to kya karna h controller batayega
import com.invoicegenerate.server_side.model.Invoice;
import com.invoicegenerate.server_side.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "${frontend.url}")//jab frontend backen ki api fetch karta h to CORS error ata h usko resolve karne k liye ye annotation use hota h
public class InvoiceController {
    @Autowired
    InvoiceService invoiceService;

    @PostMapping("/invoice")
    public Invoice addInvoice(@RequestBody Invoice invoice){
    return this.invoiceService.addInvoice(invoice);
    }

    @GetMapping("/invoices")
    //kyunki yaha ek invoice return ni hoga multiple invoice use hoge to hum list use karege
    public List<Invoice> getInvoices(){
        return this.invoiceService.getInvoices();
    }

    @DeleteMapping("/invoice/{invoiceId}")
    public Invoice deleteInvoice(@PathVariable String invoiceId){
        return this.invoiceService.deleteInvoice(Long.parseLong(invoiceId));
    }
}
