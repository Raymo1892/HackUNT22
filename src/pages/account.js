import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import "./account.css";
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase";

function Account() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const navigate = useNavigate();

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
            alert("Successfully Logged In");
            navigate('/');
        } catch (error) {
            console.log(error.message);
            alert("Invalid Email/Password");
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <div className="App" >

            <div>
                <h3> Login</h3>
                <input
                    style={{ width: 400, height: 50, fontSize: 20, textAlign: "center" }}
                    placeholder="Email"
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }}
                />
                <br></br>
                <br></br>
                <input
                    style={{ width: 400, height: 50, fontSize: 20, textAlign: "center" }}
                    placeholder="Password"
                    type="password"
                    onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }}
                />
                <br></br>
                <br></br>
                <button onClick={login} style={{ width: 400, height: 50 }}>
                    <text style={{ fontSize: 24 }}>
                        Login
                    </text>
                </button>
            </div>

            <text style={{ fontSize: 18 }}>
                To create an account click{" "}
                <Link to="/register">
                    here
                </Link>
                .
            </text>

            <h4> User Logged In: </h4>
            {user?.email}
            <br></br>
            <br></br>

            <button onClick={logout} style={{ width: 400, height: 50 }}>
                <text style={{ fontSize: 24 }}>
                    Sign Out
                </text>
            </button>

        </div >
    );
}

export default Account;
