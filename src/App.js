import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Login from "./components/loginComponent/Login";
import MainView from "./components/mainView/MainView";

export default function App() {

    const [flag, setFlag] = useState(true);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('user'))){
            setFlag(false)
        }else {
            setFlag(true)
        }
    }, []);

    function getFlag() {
        setFlag(false);
    }

    return (
        <Router>
            <Switch>
                {flag && <Route path="/" component={() => Login(getFlag)}/> }
                {!flag && <Route path="/mainPage" component={() => MainView(setFlag)}/>}
            </Switch>
        </Router>
    )
}
