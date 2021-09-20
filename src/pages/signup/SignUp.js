import React from "react";
import Button from 'react-bootstrap/Button';
import {Nav ,Form } from 'react-bootstrap';
import './signup.css'

const Signup = (props) =>{
    const handleClick = () => props.history.push('/Profile');

    return(
        <>
         <Form className="bg"/>
            <Form className ="signup-Effect" >

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
        </>
    );
}
export default Signup