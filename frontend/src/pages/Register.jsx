import Header from "../components/Header"
import './Register.css'
import { Form, Button, Container } from 'react-bootstrap'
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

    const handleOnSubmit = () => { }
    return (
        <>
            <Header />
            {/* <Container  className="d-flex flex-column justify-content-center"> */}
            <div className="centerDiv">

                <div style={{ width: '50em' }}>

                    <h3 className="mt-3">Enter Details to Register</h3>
                    <Container className="mt-4 p-5 border border-secondary rounded shadow">

                        <Form onSubmit={handleOnSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control onChange={handleOnChange} name='name' value={name} type="text" placeholder="Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={handleOnChange} name='email' value={email} type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={handleOnChange} name='pass' value={pass} type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control onChange={handleOnChange} name='confirmPass' value={confirmPass} type="password" placeholder="Confirm Password" />
                            </Form.Group>



                            <Button variant="primary" className="mt-2 px-3 py-2" type="submit">
                                Register
                            </Button>
                        </Form>
                    </Container>
                </div>
            </div>
            {/* </Container> */}
        </>
    )
}

export default Register