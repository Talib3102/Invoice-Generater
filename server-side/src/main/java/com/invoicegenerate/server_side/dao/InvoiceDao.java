package com.invoicegenerate.server_side.dao;

//ye interface mysql m data ko save karega

import com.invoicegenerate.server_side.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceDao extends JpaRepository<Invoice, Long> {

}
