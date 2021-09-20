import React from "react";
import Button from 'react-bootstrap/Button';
import {Container ,Form ,Col } from 'react-bootstrap';
import './enternewpassword.css'

const Enternewpassword = (props) =>{
    const handleClick = () => props.history.push('/Profile');

    return(
        <Container className='mt-5 p-5'>
         <Col className= 'mt-5 p-5'>
            <Form className ="enternewpassword-Effect" >
            
                <h2>Enter new Password</h2>
                    <Form.Group className="mt-3" controlId="enterNewPassword">
                        <Form.Control type="password" placeholder="New Password" />
                    </Form.Group>
                    <Form.Group className="mt-3" controlId="confirmNewPassword">
                        <Form.Control type="password" placeholder="Confirm-password" />
                    </Form.Group>

                    <Button className="mt-3 mt-3" type="button" onClick={handleClick}>Submit</Button>
            </Form>
        </Col>
        </Container>
    );
}
export default Enternewpassword