import Header from "../components/Header"
import { useState } from "react";
import { Form, Button, Container } from 'react-bootstrap'
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

    const handleOnSubmit = () => { }
    return (
        <>
            <Header />
            <Container fluid className="d-flex justify-content-center">

                <div className="w-50">
                    <h3 className="mt-3">Login Here</h3>

                    <Container className="mt-4 p-5 border border-secondary rounded shadow">

                        <Form onSubmit={handleOnSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control onChange={handleOnChange} name='name' value={name} type="text" placeholder="Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={handleOnChange} name='pass' value={pass} type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" className="mt-2 px-3 py-2" type="submit">
                                Log in
                            </Button>
                        </Form>
                    </Container>
                </div>
            </Container>
        </>
    )
}

export default Login