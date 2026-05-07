package com.invoicegenerate.server_side.services;

import com.invoicegenerate.server_side.model.Invoice;

import java.util.List;

public interface InvoiceService {

    public Invoice addInvoice(Invoice invoice);

    public List<Invoice> getInvoices();

    public Invoice deleteInvoice(Long id);
}
