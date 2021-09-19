import React from "react";
import Button from 'react-bootstrap/Button';
import {Row ,Nav ,Card, Container,Form} from 'react-bootstrap'

const signup = (props) =>{
    const handleClick = () => props.history.push('/profile');

    return(
        <Container className='mt-5'>
            <Row className="justify-content-md-center">
                <Card className="text-center" style={{ width: '20rem' }}>
                    <Form>

                        <h2 className = "App-b">Signup</h2> 
                        <Form.Group className="mt-3" controlId="signUpUserName">
                            <Form.Control type="user" placeholder="User Name" />
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="signUpEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="SignUpPassword">
                            <Form.Control type="password" placeholder="Enter Password" />
                        </Form.Group>
                        
                        <Nav className="justify-content-end">
                            <Nav.Item>
                                <Nav.Link href="/">Already have an account</Nav.Link>
                            </Nav.Item> 
                        </Nav>
                        
                        <Button className="mt-3 mb-3" type="button" onClick={handleClick}>Create Account</Button>
                        
                    </Form>
                </Card>
            </Row>
        </Container>
    );
}
export default signup