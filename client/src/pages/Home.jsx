import Header from "../components/Header.jsx";
import { Box, Typography, Button, Container } from "@mui/material";
import AddInvoice from "../components/AddInvoice.jsx";
import { useState, useEffect } from "react";
import Invoices from "../components/invoices.jsx";
import { getAllInvoices, deleteInvoice } from "../services/api.js";


const Home = () => {

    const [addInvoice, setAddInvoice] = useState(false);
    const [invoices, setInvoices] = useState([]);


    useEffect(() => {
        const getData = async () => {
            const response = await getAllInvoices();
            setInvoices(response.data);
        }
        getData();
    }, [addInvoice])


    const toggleInvoice = () => {
        setAddInvoice(true);

    }

    const removeInvoice = async (id) => {
        await deleteInvoice(id);
        const updatedInvoices = invoices.filter(invoice => invoice.id != id);
        setInvoices(updatedInvoices);

    }
    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
            <Header />

            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                    <Box>
                        <Typography variant="h4" color="textPrimary">
                            Dashboard
                        </Typography>
                        <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
                            Manage your pending and completed invoices.
                        </Typography>
                    </Box>
                    
                    {!addInvoice && (
                        <Button 
                            variant="contained" 
                            onClick={() => toggleInvoice()}
                            sx={{ 
                                py: 1.2, px: 3, borderRadius: '10px',
                                backgroundColor: '#4f46e5',
                                boxShadow: '0 4px 6px -1px rgb(79 70 229 / 0.4)',
                                '&:hover': { backgroundColor: '#4338ca' }
                            }}
                        >
                            + Add Invoice
                        </Button>
                    )}
                </Box>


                {addInvoice && (
                    <Box sx={{ mb: 6 }}>
                        <AddInvoice setAddInvoice={setAddInvoice} />
                    </Box>
                )}

                <Box sx={{ 
                    backgroundColor: '#ffffff', 
                    borderRadius: '16px', 
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
                    p: 2 
                }}>
                    <Invoices invoices={invoices} removeInvoice={removeInvoice} />
                </Box>
            </Container>
        </Box>
    )
}
export default Home;