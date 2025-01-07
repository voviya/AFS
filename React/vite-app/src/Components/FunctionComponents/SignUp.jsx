import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [firstName, setFName] = useState("");
    const [lastName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    var navigate = useNavigate()

    var signup = async (event) => {
        event.preventDefault()//prevents the default loading
        var req = await axios.post("https://afs-2.onrender.com/signup",
            {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }
        )
        console.log(req);//console.log(req.data);
        navigate('/Login')
    }

    return (
        <div>
            <form onSubmit={signup}>
                <h1>Sign Up</h1>

                <label>First Name:</label>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={firstName}
                    onChange={(e) => setFName(e.target.value)}
                />
                <br />

                <label>Last Name:</label>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={lastName}
                    onChange={(e) => setLName(e.target.value)}
                />
                <br />

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

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
