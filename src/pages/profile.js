import React from "react";
import {Button ,Container} from 'react-bootstrap';
//import Alert from 'react-bootstrap/Alert';
//import Container from 'react-bootstrap/Container'

const profile = (props) =>{
    const handleClick = () => props.history.push('/');

    return(
        <>
            <Container>
                    <h2>Profile</h2>
                    <Button className="mt-3 mt-3" type="button" onClick={handleClick}>Logout</Button>
            </Container>
        </>
    )
}
export default profile