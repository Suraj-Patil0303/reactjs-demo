import React from "react";
// import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {Nav ,Form } from 'react-bootstrap'
import './forgotpassword.css'

const Forgotpassword = (props) =>{
    const handleClick = () => props.history.push('/EnterNewPassword');

    return(
        <>
         <Form className="bg"/>
           <Form className ="forgotpassword-Effect" >

            <Form.Label className="mt-3" size="lg">Forgot Password</Form.Label>

                <Form.Group className="mt-3" controlId="forgotpasswordEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                    
                <Nav className="justify-content-end">
                    <Nav.Item>
                        <Nav.Link href="/">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Signup">Signup</Nav.Link>
                    </Nav.Item>  
                </Nav>

                <Button className="mt-3 mb-3" type="button" onClick={handleClick}>Send Link</Button>

            </Form>
        </>
    );
}
export default Forgotpassword