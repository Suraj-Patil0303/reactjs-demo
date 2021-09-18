import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import {Row ,Nav ,Card, Container} from 'react-bootstrap'
const login = (props) =>{
    // const history = useHistory();
    const handleClick = () => props.history.push('/profile');
    return(
        <Container className='mt-5'>
            <Row className="justify-content-md-center">
                <Card className="text-center" style={{ width: '20rem' }}>
                {/* <Col  className="text-center"> */}
                    <Form >

                        <h3 className="mt-3">Login</h3>
                        <Form.Group className="mt-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mt-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Enter Password" />
                        </Form.Group>

                        <Nav className="justify-content-end">
                            <Nav.Item>
                                <Nav.Link href="/forgotpassword">Forgotpassword</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/signup">Signup</Nav.Link>
                            </Nav.Item>  
                        </Nav>

                        <Button className="mt-3 mb-3" type="button" onClick={handleClick}>Logins</Button>

                    </Form>
                {/* </Col> */}
                </Card>
            </Row>
        </Container>
    );

}
export default login