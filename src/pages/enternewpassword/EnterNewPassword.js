import React from "react";
import Button from 'react-bootstrap/Button';
import {Form } from 'react-bootstrap';
import './enternewpassword.css'

const Enternewpassword = (props) =>{
    const handleClick = () => props.history.push('/Profile');

    return(
        <>
            <Form className="bg"/>
                <Form className ="forgotpassword-Effect" >
            
                <Form.Label className="mt-3" size="lg">Enter new Password</Form.Label>

                    <Form.Group className="mt-3" controlId="enterNewPassword">
                        <Form.Control type="password" placeholder="New Password" />
                    </Form.Group>
                    <Form.Group className="mt-3" controlId="confirmNewPassword">
                        <Form.Control type="password" placeholder="Confirm-password" />
                    </Form.Group>

                    <Button className="mt-3 mt-3" type="button" onClick={handleClick}>Submit</Button>
            </Form>
        </>
    );
}
export default Enternewpassword