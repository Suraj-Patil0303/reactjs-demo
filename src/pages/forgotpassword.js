import React from "react";
// import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {Row ,Nav ,Card, Container,Form} from 'react-bootstrap'


const forgotpassword = (props) =>{
    const handleClick = () => props.history.push('/enternewpassword');

    return(
        <Container className='mt-5'>
            <Row className="justify-content-md-center">
                <Card className="text-center" style={{ width: '20rem' }}>
                    <Form>
                        <h2 className="mt-3">Forgotpassword</h2>
                        <Form.Group className="mt-3" controlId="forgotpasswordEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    
                        <Nav className="justify-content-end">
                            <Nav.Item>
                                <Nav.Link href="/">Login</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/signup">Signup</Nav.Link>
                            </Nav.Item>  
                        </Nav>

                        <Button className="mt-3 mb-3" type="button" onClick={handleClick}>Send Link</Button>

                    </Form>
                </Card>
            </Row>
        </Container>
    );
}
export default forgotpassword