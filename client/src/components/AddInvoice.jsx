import { Box, Typography, TextField, Button, styled, Paper } from "@mui/material";
import { useState } from "react";
import { saveInvoice } from "../services/api";

const StyledPaper = styled(Paper)(({ theme }) => ({
    marginTop: 30,
    padding: 32,
    borderRadius: 16,
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    backgroundColor: '#ffffff',
}));

const FormContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    '& > div': {
        width: '100%'
    }
});

const defaultObj = {
    vendor: '',
    product: '',
    amount: 0,
    date: '',
    action: 'pending'
}

const AddInvoice = ({ setAddInvoice }) => {
    const [invoice, setInvoice] = useState(defaultObj)

    const onValueChange = (e) => {
        setInvoice({ ...invoice, [e.target.name]: e.target.value })
    }

    const addNewInvoice = async () => {
        await saveInvoice({ ...invoice, amount: Number(invoice['amount']) });
        setAddInvoice(false);
    }

    return (
        <StyledPaper elevation={0}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: '#1e293b' }}>
                Create New Invoice
            </Typography>
            <FormContainer>
                <TextField 
                    label="Vendor Name" 
                    variant="outlined" 
                    fullWidth 
                    onChange={(e) => onValueChange(e)} 
                    name="vendor" 
                />
                <TextField 
                    label="Product Name" 
                    variant="outlined" 
                    fullWidth 
                    onChange={(e) => onValueChange(e)} 
                    name="product" 
                />
                <TextField 
                    label="Amount (₹)" 
                    variant="outlined" 
                    type="number" 
                    fullWidth 
                    onChange={(e) => onValueChange(e)} 
                    name="amount" 
                />
                <TextField 
                    variant="outlined" 
                    type="date" 
                    fullWidth 
                    onChange={(e) => onValueChange(e)} 
                    name="date" 
                    helperText="Select Invoice Date"
                    sx={{
                        '& input::-webkit-calendar-picker-indicator': {
                            cursor: 'pointer',
                            filter: 'invert(0)', // Ensures it's dark/visible on white
                        },
                        '& .MuiInputBase-input': {
                            color: '#1e293b',
                        }
                    }}
                />

                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <Button 
                        variant="contained" 
                        onClick={() => addNewInvoice()}
                        sx={{ 
                            py: 1.5, 
                            px: 4, 
                            borderRadius: '8px',
                            backgroundColor: '#4f46e5',
                            '&:hover': { backgroundColor: '#4338ca' }
                        }}
                    >
                        Save Invoice
                    </Button>
                    <Button 
                        variant="text" 
                        onClick={() => setAddInvoice(false)}
                        sx={{ color: '#64748b' }}
                    >
                        Cancel
                    </Button>
                </Box>
            </FormContainer>
        </StyledPaper>
    )
}

export default AddInvoice;