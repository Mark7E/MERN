import React, { useState } from 'react';


const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [person, setPerson] = useState({ firstName, lastName, email, password, confirmPassword })
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confrimPasswordError, setConfrimPasswordError] = useState("");

    // const error = (e) => {
    //     setError(e.target.value);
    //     if(e.target.value.length < 2) {
    //         setError("Name is required!");
    //     }
    // }


    const createUser = (e) => {
        e.preventDefault();
        if (firstName.length < 2 && firstName.length > 0){
            setFirstNameError("First name must be at least 2 charachters")
        }
        if (lastName.length < 2 && lastName.length > 0 ){
            setLastNameError("Last name must be at least 2 charachters")
        }
        if(email.length < 5 && email.length > 0){
            setEmailError("Email must be at least 5 characters.")
        }
        if(password.length <= 8 && password.length > 0){
            setPasswordError("Password must be at least 8 characters!")
        }
        // if( password.length == 0 && confirmPassword.length == 0){
        //     setPasswordError("Please enter a secure password!")
        // }
        if(password > 8 && password !== confirmPassword){
            setConfrimPasswordError("Passwords don't match!")
        }
        


        const newUser = { firstName, lastName, email, password, confirmPassword };
        setPerson(newUser)

        console.log("Welcome", newUser);
    };


    return (
        <div>
            <form onSubmit={createUser}>
                    {
                        
                        firstNameError ?  <p> {firstNameError} </p>
                            : ""
                    }
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </div>
                {
                        
                        lastNameError? <p> {lastNameError} </p>
                            : ""
                    }
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </div>
                {
                    emailError? <p> {emailError} </p>
                    : ""
                }
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                {
                    passwordError ? <p> {passwordError} </p>
                    : ""
                }
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                {
                    confrimPasswordError ? <p> {confrimPasswordError} </p>
                    : ""
                }
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                </div>
                <input type="submit" value="Create User" />
            </form>

            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
};

export default HookForm;
