import React, {useState} from "react";
import "./UserProfile.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";

export default function UserProfile(){

    const [user, setUser] = useState(undefined);
    const [confirmPasword, setConfirmPassword] = useState(undefined);
    const history = useHistory();

    function handleChange(event){
        setUser({...user, [event.target.name]: event.target.value});
    }

    function handlePassword(event){
        setConfirmPassword(event.target.value);
    }

    function handleSave(){
        if (user.password === confirmPasword){
            localStorage.setItem('user', JSON.stringify(user));
            history.push('/mainPage/tasks');
        }else {
            alert("The passwords are not equals");
        }
    }

    return(
        <div className="userProfile-background">
            <div className="userProfile-container">
                <h1>Registration</h1>
                <img src="/img/profile.png" alt="profile"/>
                <form>
                    <TextField
                        fullWidth
                        name={'fullName'}
                        label={'Full name'}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        name={'email'}
                        label={'Email'}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        type={'password'}
                        name={'password'}
                        label={'password'}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        type={'password'}
                        label={'Confirm Password'}
                        onChange={handlePassword}
                    />
                    <Button
                        className="button-user"
                        color={"primary"}
                        variant={"contained"}
                        onClick={handleSave}
                    >
                        Save
                    </Button>
                </form>
            </div>
        </div>
    )

}