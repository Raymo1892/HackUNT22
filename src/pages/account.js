import React from 'react'
import { useState } from "react";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import "./account.css";
import { NavLink, Button } from "./accountElements";
import { auth } from "../firebase";

function Account() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

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
        } catch (error) {
            console.log(error.message);
            alert("Invalid Email/Password");
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <div className="App">

            <div>
                <h3> Login </h3>
                <input
                    placeholder="Email"
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }}
                />
                <input
                    placeholder="Password"
                    type="password"
                    onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }}
                />

                <button onClick={login}> Login</button>
            </div>

            <h4> User Logged In: </h4>
            {user?.email}

            <button onClick={logout}> Sign Out </button>

            <NavLink to="/register" activeStyle>
                <Button>
                    Register
                </Button>
            </NavLink>
        </div>
    );
}

export default Account;
