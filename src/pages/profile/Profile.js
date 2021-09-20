import React from "react";
import {Button ,Container} from 'react-bootstrap';
import { FormLabel } from "react-bootstrap";
//import Alert from 'react-bootstrap/Alert';
//import Container from 'react-bootstrap/Container'

const Profile = (props) =>{
    const handleClick = () => props.history.push('/');
    const a = props.location.state.emailID;
    return(
        <>
            <Container>
                <h2>Profile</h2>
                <FormLabel>
                    {a}
                </FormLabel> 
                <Button className="mt-3 mt-3" type="button" onClick={handleClick}>Logout</Button>
            </Container>
        </>
    )
}
export default Profile