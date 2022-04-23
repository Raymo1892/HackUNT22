import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./account.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";
import * as firebase from "../firebase";

export default function Account() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    const auth = getAuth();
    signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            //alert("Invalid Email/Password");
        });

    /*const Account = () => {
        const emailRef = useRef(null);
        const passwordRef = useRef(null);
        const signUp = e => {
            e.preventDefault();
            auth.createUserWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            ).then(user => {
                console.log(user)
            }).catch(err => {
                console.log(err)
            })
        }
        const signin = e => {
            e.preventDefault();
            auth.signInWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            ).then(user => {
                console.log(user)
            }).catch(err => {
                console.log(err)
            })
        }*/
    return (
        <div className="Account">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={"Enter email here"}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={"Enter password here"}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}
                    style={{
                        maxWidth: "100px",
                        maxHeight: "5555px",
                        minWidth: "234px",
                        minHeight: "30px"
                    }}
                >
                    Login
                </Button>
            </Form>
        </div >
    );
}

//export default Account;