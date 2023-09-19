import { useState } from "react";
import './Signup.css';
import PasswordRegexPattern from "../Regex/PasswordRegex";
import EmailRegex from "../Regex/EmailRegex";

// validate password regex
const validatePassword = (password) => {
    if (password.value.length < 8 && password.isTouched) {
        return (
            <span className="error">Password cannot be less than 8 characters</span>
        );
    }
    if (!(PasswordRegexPattern).test(password.value) && password.isTouched) {
        return (
            <span className="error">Password must include at least one uppercase letter, one digit, and one special character</span>
        );
    }
    return null;
};

// validate password matching
const validateConfirmPassword = (password, confirmPassword) => {
    if (password.value !== confirmPassword.value && confirmPassword.isTouched) {
        return (
            <span className="error">Password is not matching</span>
        )
    }
    return null;
};

// validate email regex
const validateEmail = (email) => {
    if (email.value.length < 8 && email.isTouched) {
        return (
            <span className="error">Email cannot be less than 8 characters</span>
        )
    }
    if (!(EmailRegex).test(email.value) && email.isTouched) {
        return (
            <span className="error">Please enter a valid email address</span>
        )
    }
    return null;
};


function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState({
        value: "",
        isTouched: false
    });
    const [password, setPassword] = useState({
        value: "",
        isTouched: false
    })
    const [confirmPassword, setConfirmPassword] = useState({
        value: "",
        isTouched: false
    })
    const [role, setRole] = useState("Role");

    const formValidate = () => {
        if (validateEmail(email) != null || validatePassword(password) != null || validateConfirmPassword(password, confirmPassword) != null) {
            return false;
        }
        if (role === "Role") {
            return false;
        }
        return true;
    }

    const clearFields = () => {
        setUsername("");
        setEmail({
            value: "",
            isTouched: false
        });
        setPassword({
            value: "",
            isTouched: false
        });
        setConfirmPassword({
            value: "",
            isTouched: false
        });
        setRole("Role");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        formValidate();
        alert("Hello there " + username
        );
        console.log("Submitted \n", {
            "username: ": username,
            "email: ": email.value,
            "password: ": password.value,
            "role: ": role
        }
        );
        clearFields();
    }

    return (
        <div className="signup">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="input-form">
                        <label>Username: <sup>*</sup></label>
                        <input type="text" name="userName" id="userName"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoComplete="off"
                        />
                    </div>
                    <div className="input-form">
                        <label >Email: <sup>*</sup></label>
                        <input type="email"
                            placeholder="email"
                            id="email" name="email"
                            value={email.value}
                            onChange={(e) => setEmail({
                                value: e.target.value,
                                isTouched: email.isTouched
                            })}
                            autoComplete="off"
                            onBlur={() => setEmail({
                                ...email,
                                isTouched: true
                            })}
                        />
                        {validateEmail(email)}
                    </div>
                    <div className="input-form">
                        <label >Password: <sup>*</sup></label>
                        <input type="text"
                            id="password" name="password"
                            placeholder="password"
                            value={password.value}
                            onChange={(e) => setPassword({
                                value: e.target.value,
                                isTouched: password.isTouched
                            })}
                            autoComplete="off"
                            onBlur={() => setPassword({
                                ...password,
                                isTouched: true
                            })}
                        />
                        {validatePassword(password)}
                    </div>
                    <div className="input-form">
                        <label >Confirm password: <sup>*</sup></label>
                        <input type="text"
                            id="confirm-pass" name="confirm-pass"
                            placeholder="Confirm password"
                            value={confirmPassword.value}
                            onChange={(e) => setConfirmPassword({
                                value: e.target.value,
                                isTouched: confirmPassword.isTouched
                            })}
                            autoComplete="off"
                            onBlur={() => setConfirmPassword({
                                ...confirmPassword,
                                isTouched: true
                            })}
                        />
                        {validateConfirmPassword(password, confirmPassword)}
                    </div>
                    <div className="input-form">
                        <label >Role: <sup>*</sup></label>
                        <select name="role" id="role" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="Role">Role</option>
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <button disabled={!formValidate()} type="Submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}


export default Signup;
