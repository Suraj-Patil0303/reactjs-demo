import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row ,Nav ,Card, Container} from 'react-bootstrap';
import { useState } from "react";

const MyLogin = (props) =>{
    // const history = useHistory();
    const handleClick = () =>{
       if(a.aEmailID === email.emailId && a.aPassword === email.password)
        {
           props.history.push('/profile');
         }else{
            alert("Password is incorrect")
         }
      }
    const [email , setEmail] = useState({emailId : "", password : ''})

    const a = {aEmailID: "suraj@qwe.com", aPassword : "qwer"}


    return(
        <Container className='mt-5'>
            <Row className="justify-content-md-center p-5">
                <Card  className="shadow p-3 mb-5 bg-white rounded" style={{ width: '20rem' }}>
                {/* <Col  className="text-center"> */}
                    <Form >

                        <h3 className="mt-3">Login</h3>
                        <Form.Group className="shadow-sm mt-4 bg-white rounded" controlId="loginEmail">
                            <Form.Control type="email" 
                            placeholder="Enter email"
                            value ={email.emailId} 
                            onChange ={e => setEmail({ ...email,emailId: e.target.value})} />
                        </Form.Group>

                        <Form.Group className="mt-4" controlId="loginPassword">
                            <Form.Control type="password" placeholder="Enter Password"
                            value ={email.password} 
                            onChange ={e => setEmail({ ...email,password : e.target.value})} />
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
export default MyLogin