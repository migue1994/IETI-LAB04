import React, {useEffect, useState} from "react";
import "./Login.css"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useHistory} from 'react-router-dom';
import RequestService from "../../services/RequestService";

export default function Login(){

    const [userData, setUserData] = useState(null);
    let history = useHistory();

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('user'))){
            history.push('/mainPage')
        }
    },[history])

    function handleChange(event){
        setUserData({...userData, [event.target.name]: event.target.value});
    }

    function submit(){
        RequestService.login(userData)
            .then(() => history.push('/mainPage'));
    }

    return(
        <div className="background">
            <div className="login-card">
                <div className="avatar">
                    <img src={"/img/avatar5.png"} alt=""/>
                </div>
                <h1>Task Planner</h1>
                <form
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
                        className="login-button"
                        onClick={submit}
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
