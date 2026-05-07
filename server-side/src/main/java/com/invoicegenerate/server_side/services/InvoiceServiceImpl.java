package com.invoicegenerate.server_side.services;

//interface ke methods ko implement is file m karege

import com.invoicegenerate.server_side.dao.InvoiceDao;
import com.invoicegenerate.server_side.model.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvoiceServiceImpl implements InvoiceService{
    @Autowired
    InvoiceDao invoiceDao;


    @Override
    public Invoice addInvoice(Invoice invoice) {
        invoiceDao.save(invoice);//Database me save karne k liye use hota h
        return invoice;
    }

    @Override
    public List<Invoice> getInvoices() {
        return invoiceDao.findAll();
    }

    @Override
    public Invoice deleteInvoice(Long id) {
        Invoice invoice= invoiceDao.findById(id).get();
        invoiceDao.delete(invoice);
        return invoice;

    }
}
