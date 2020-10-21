import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Responsible.css";

export default function Responsible(props){

    function handleChange(event){
        props.setResponsible({...props.responsible, [event.target.name]: event.target.value});
    }

    return(
        <div className="responsible-container">
            Responsible:
            <TextField
                label={'First Name'}
                name={'firstname'}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label={'Last Name'}
                name={'lastname'}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label={'email'}
                name={'email'}
                onChange={handleChange}
                fullWidth
            />
        </div>
    )
}