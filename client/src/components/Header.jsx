import { AppBar, Toolbar, Box } from "@mui/material";

const Header = () => {
    const logo = "https://dashboard.getinvoice.co/dboard/img/logo.png"
    return (
        <AppBar 
            position="static" 
            sx={{ 
                background: '#ffffff', 
                boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
                borderBottom: '1px solid #e2e8f0'
            }}
        >
            <Toolbar>
                <Box component="img" src={logo} alt="Logo" sx={{ width: 120, height: 'auto' }} />
            </Toolbar>
        </AppBar>
    )
}

export default Header;