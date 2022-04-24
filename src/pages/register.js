import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import "./register.css";
import { auth } from "../firebase";

function Register() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="App">
            <div>
                <h3> Register User </h3>
                <input
                    style={{ width: 400, height: 50, fontSize: 20, textAlign: "center" }}
                    placeholder="Email"
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }}
                />
                <br></br>
                <br></br>
                <input
                    style={{ width: 400, height: 50, fontSize: 20, textAlign: "center" }}
                    placeholder="Password"
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }}
                />
                <br></br>
                <br></br>

                <button onClick={register} style={{ width: 400, height: 50 }}>
                    <text style={{ fontSize: 24 }}>
                        Create User
                    </text>
                </button>
            </div>
        </div>

    );
}

export default Register;