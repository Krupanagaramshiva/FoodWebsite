import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './login.css'; // Import CSS file for styling
import NavBar from './NavBar';

const Login = () => {
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");
    const navigate = useNavigate();

    function loginClick() {
        if(uname === "admin" && password === "admin123") {
            sessionStorage.setItem("USER_ID", uname);
            navigate("/");
        } else {
            setResult("Invalid User Id or password");
        }
    }
    return (
        <div className="login-container">
          <div>
            <NavBar/>
          </div>
            <fieldset className='form'>
                <h1>User Login</h1>

                <label >username</label> 
                <input type="text" onChange={(e) => setUname(e.target.value)} />
                
                <br/><br/>
                <label > Password:</label>   
               
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                
                <br/><br/>
                <input type="button" onClick={loginClick} value="Login" />
                <p style={{color: "red"}}>{result}</p>
            </fieldset>
        </div>
    );
}

export default Login;
