import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, {useState} from "react";
import Login from "./components/loginComponent/Login";
import MainView from "./components/mainView/MainView";

export default function App() {

    const [flag, setFlag] = useState(true);

    function getFlag() {
        setFlag(false);
    }

    return (
        <Router>
            {flag && <Login getFlag={getFlag}/>}
            <Switch>
                <Route path="/mainPage" component={MainView}/>
            </Switch>
        </Router>
    )
}
