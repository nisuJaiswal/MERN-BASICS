import Header from "../components/Header"

import { Box, Container, TextField, Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import './Register.css'

const Login = () => {
    const [form, setForm] = useState({
        name: '',
        email: ''
    });

    const { name, pass } = form;
    const handleOnChange = (e) => {
        setForm((previous) => ({
            ...previous,
            [e.target.name]: e.target.value
        }));
    }
    const theme = createTheme()

    const handleOnSubmit = () => { }
    return (
        <>
            <Header />
            <ThemeProvider theme={theme}>
                <Container sx={{ height: '80vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

                    <Container sx={{ width: '40%', minWidth: '350px', padding: '4rem 1rem', border: '1px solid rgb(158,158,158)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', boxShadow: '7px 5px 10px grey' }}>
                        <Typography variant="h4">Login</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '1rem' }}>
                            <TextField onChange={handleOnChange} name="name" value={name} id="outlined-basic" size="small" sx={{ width: '150%' }} label="Username" variant="outlined" />

                            <TextField onChange={handleOnChange} name="pass" value={pass} id="outlined-basic" size="small" sx={{ width: '150%' }} type="email" label="Password" variant="outlined" />

                            <Button sx={{ marginTop: '1rem' }} onSubmit={handleOnSubmit} variant="contained">Register</Button>
                        </Box>
                    </Container>

                </Container>
            </ThemeProvider>
        </>
    )
}

export default Login