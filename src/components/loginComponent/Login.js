import React, {useEffect, useState} from "react";
import "./Login.css"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Login(){

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const user = {
            username: 'miguel@email.com',
            password: 'pass123'
        }
        localStorage.setItem('user', JSON.stringify(user));
    },[]);

    function handleChange(event){
        setUserData({...userData, [event.target.name]: event.target.value});
    }

    function submit(){
        const enteredUsed = JSON.parse(localStorage.getItem('user'));
        if (userData.username === enteredUsed.username && userData.password === enteredUsed.password){
            alert(`Welcome ${userData.username}`);
        }
        else {
            alert('The username or password is incorrect, please try again');
        }
    }

    return(
        <div className="background">
            <div className="login-card">
                <div className="avatar">
                    <img src="/img/avatar5.png" alt=""/>
                </div>
                <h1>Task Planner</h1>
                <form onSubmit={submit} className="content">
                    <TextField
                        name={'username'}
                        onChange={handleChange}
                        fullWidth
                        label="Username"
                        placeholder="Please enter your username"
                    />
                    <TextField
                        name={'password'}
                        onChange={handleChange}
                        type="password"
                        fullWidth
                        label="Password"
                        placeholder="Please enter your password"
                    />
                    <Button
                        type="submit"
                        className="login-button"
                    >
                        Login
                    </Button>
                    <a href="#">Create Account</a>
                </form>
            </div>
        </div>
    )
}
