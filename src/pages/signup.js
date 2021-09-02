import React from "react";

const signup = (props) =>{
    const handleClick = () => props.history.push('/');

    return(
        <form>
        <h2>Signup</h2>
        <div>
            <label>Email</label>
            <input type="email" placeholder="Email" />
        </div>
        <div>
            <button type="button" onClick={handleClick}>
                Login
            </button>
            <button type="button" onClick={handleClick}>
                SignUp
            </button>
        </div>
        </form>
    )
}
export default signup