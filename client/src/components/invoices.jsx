import { Table, TableBody, TableCell, TableHead, TableRow, Button, styled, Typography, Box } from "@mui/material";

const StyledTable = styled(Table)(({ theme }) => ({
    width: '100%',
    margin: '20px auto',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    backgroundColor: '#ffffff',
    '& thead th': {
        backgroundColor: '#f8fafc',
        color: '#475569',
        fontWeight: 600,
        fontSize: '0.875rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        padding: '16px',
        borderBottom: '2px solid #e2e8f0',
    },
    '& tbody td': {
        padding: '16px',
        color: '#1e293b',
        fontSize: '0.95rem',
        borderBottom: '1px solid #f1f5f9',
    },
    '& tbody tr:hover': {
        backgroundColor: '#f8fafc',
        transition: 'background-color 0.2s ease',
    },
}));

const Invoices = ({ invoices, removeInvoice }) => {
    return (
        <Box sx={{ mt: 4, overflowX: 'auto', borderRadius: '12px' }}>
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Vendor</TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {invoices && Array.isArray(invoices) && invoices.length > 0 ? 
                        invoices.map(invoice => (
                            <TableRow key={invoice.id}>
                                <TableCell sx={{ fontWeight: 500 }}>{invoice.vendor}</TableCell>
                                <TableCell>{invoice.product}</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>₹{invoice.amount}</TableCell>
                                <TableCell>{invoice.date}</TableCell>
                                <TableCell>
                                    <Box component="span" sx={{ 
                                        px: 1.5, py: 0.5, borderRadius: 1.5, fontSize: '0.75rem', fontWeight: 600,
                                        backgroundColor: '#fffbeb', color: '#b45309', border: '1px solid #fde68a',
                                        textTransform: 'capitalize'
                                    }}>
                                        {invoice.action}
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Button 
                                        variant="contained" 
                                        size="small" 
                                        color="success"
                                        onClick={() => removeInvoice(invoice.id)}
                                        sx={{ 
                                            borderRadius: '6px', 
                                            fontSize: '0.75rem',
                                            backgroundColor: '#10b981',
                                            '&:hover': { backgroundColor: '#059669' }
                                        }}
                                    >
                                        Mark Done
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                        :
                        <TableRow>
                            <TableCell colSpan={6} sx={{ textAlign: 'center', py: 10 }}>
                                <Typography variant="body1" sx={{ color: '#94a3b8', fontStyle: 'italic' }}>
                                    No pending invoices found
                                </Typography>
                            </TableCell>
                        </TableRow>
                    }
                </TableBody>
            </StyledTable>
        </Box>
    )
}

export default Invoices;