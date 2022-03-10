import Header from "../components/Header"
import { Box, Container, TextField, Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Register.css'
import { useState } from "react"
const Register = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        pass: '',
        confirmPass: ''
    });

    const { name, email, pass, confirmPass } = form;

    const handleOnChange = (e) => {
        setForm((previous) => ({
            ...previous,
            [e.target.name]: e.target.value
        }));
    }

    const theme = createTheme();

    const handleOnSubmit = () => { }
    return (
        <>
            <Header />
            <ThemeProvider theme={theme}>
                <Container sx={{ height: '80vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

                    <Container sx={{ width: '40%', minWidth: '350px', padding: '4rem 1rem', border: '1px solid rgb(158,158,158)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', boxShadow: '7px 5px 10px grey' }}>
                        <Typography variant="h4">Registration</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '1rem' }}>
                            <TextField onChange={handleOnChange} name="name" value={name} id="outlined-basic" size="small" sx={{ width: '150%' }} label="Username" variant="outlined" />

                            <TextField onChange={handleOnChange} name="email" value={email} id="outlined-basic" size="small" sx={{ width: '150%' }} type="email" label="Email" variant="outlined" />

                            <TextField onChange={handleOnChange} name="pass" value={pass} id="outlined-basic" size="small" type="password" sx={{ width: '150%' }} label="Password" variant="outlined" />

                            <TextField onChange={handleOnChange} name="confirmPass" type="password" value={confirmPass} id="outlined-basic" size="small" sx={{ width: '150%' }} label="Confirm Password" variant="outlined" />


                            <Button sx={{ marginTop: '1rem' }} onSubmit={handleOnSubmit} variant="contained">Register</Button>
                        </Box>
                    </Container>

                </Container>
            </ThemeProvider>

        </>
    )
}

export default Register