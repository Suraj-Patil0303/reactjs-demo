import React from "react";
import Button from 'react-bootstrap/Button';
import {Row ,Card, Container,Form} from 'react-bootstrap'

const enternewpassword = (props) =>{
    const handleClick = () => props.history.push('/profile');

    return(
        <Container className='mt-5'>
            <Row className="justify-content-md-center">
                <Card className="text-center" style={{ width: '20rem' }}>
                    <Form>
                        <h2>Enter new Password</h2>
                        <Form.Group className="mt-3" controlId="enterNewPassword">
                            <Form.Control type="password" placeholder="New Password" />
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="confirmNewPassword">
                            <Form.Control type="password" placeholder="Confirm-password" />
                        </Form.Group>

                        <Button className="mt-3 mt-3" type="button" onClick={handleClick}>Submit</Button>
                    </Form>
                </Card>
            </Row>
        </Container>
    );
}
export default enternewpassword