import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    var navigate=useNavigate();
    var login = async (event) => {
        event.preventDefault()//prevent the default loading
        var req=await axios.post('https://afs-2.onrender.com/login',{
            email,password
        })
        console.log(req.data);//console.log(req);
       var isLoggedInSuccessful=req.data.isLoggedIn
       console.log(isLoggedInSuccessful);
       if(isLoggedInSuccessful)
       {
        navigate('/useMemo');
        var message=req.data.message;
        console.log(message);
       }
       else{

        var message=req.data.message;
        console.log(message);
       }
    }
    return (
        <div>
            <form onSubmit={login}>
                <h1>Login</h1>

                <label>Email:</label>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <label>Password:</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />

                <button type="submit">LOGIN</button>
            </form>
        </div>
    );
}

export default Login;
