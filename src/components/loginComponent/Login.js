import React, {useEffect, useState} from "react";
import "./Login.css"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useHistory} from 'react-router-dom';

export default function Login(props){

    const [userData, setUserData] = useState(null);
    let history = useHistory();

    useEffect(() => {
        const user = {
            username: 'miguel@email.com',
            password: 'pass123',
            name: 'Miguel Ángel',
            lastName: 'Rivera Rojas',
            phoneNumber: '52354155',
            address: 'cr 1 # 2 - 3'
        }
        localStorage.setItem('user', JSON.stringify(user));
    },[]);

    useEffect(() => {
        if (localStorage.getItem('userLogged')){
            props.getFlag();
            history.push('mainPage');
        }
    })

    function handleChange(event){
        setUserData({...userData, [event.target.name]: event.target.value});
    }

    function submit(){
        const enteredUsed = JSON.parse(localStorage.getItem('user'));
        if (userData.username === enteredUsed.username && userData.password === enteredUsed.password){
            alert(`Welcome ${userData.username}`);
            localStorage.setItem('userLogged', JSON.stringify(userData));
            props.getFlag();
            history.push("/mainPage");
        }
        else {
            alert('The username or password is incorrect, please try again');
        }
    }

    return(
        <div className="background">
            <div className="login-card">
                <div className="avatar">
                    <img src={"/img/avatar5.png"} alt=""/>
                </div>
                <h1>Task Planner</h1>
                <form
                    onSubmit={submit}
                    className="content"
                >
                    <TextField
                        required
                        name={'username'}
                        onChange={handleChange}
                        fullWidth
                        label="Username"
                        placeholder="Please enter your username"
                    />
                    <TextField
                        required
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
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Create Account</a>
                </form>
            </div>
        </div>
    )
}
