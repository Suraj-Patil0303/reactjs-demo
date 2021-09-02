import React from "react";
//import { Button} from "react-bootstrap";
//import signup from "../pages/signup"
// import { useHistory } from "react-router-dom";

const login = (props) =>{
    // const history = useHistory();
    const handleClick = () => props.history.push('/signup');

    return(
        <form>
            <h2>Login</h2>
            <div>
                <label>Email</label>
                <input type="email" placeholder="Email" />
            </div>
            <div>
                <label>Password</label>
                <input type="PassWord" placeholder="Password" />
            </div>
            <div>
                <button type="button" onClick={handleClick}>
                    signup
                </button>
            </div>
        </form>
    );

};
export default login