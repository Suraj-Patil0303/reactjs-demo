import React from "react";
import {Button ,Container} from 'react-bootstrap';
import { useParams } from "react-router";

const Profile = (props) =>{
    const handleClick = () => props.history.push('/');
    const a = props.location.state.emailID;
    const {name} = useParams();
    return(
        <div>
            <Container>
                <h2>Profile</h2>
                <div>
                    <label>name of user by useParams :{name}</label> 
                </div>
                <div>
                    <label>name of user by props :{a}</label>
                </div>
                <Button className="mt-3 mt-3" type="button" onClick={handleClick}>Logout</Button>
            </Container>
        </div>
    )
}
export default Profile