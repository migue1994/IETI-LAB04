import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React from "react";
import Login from "./components/loginComponent/Login";
import MainView from "./components/mainView/MainView";

export default function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/mainPage" component={MainView}/>
            </Switch>
        </Router>
    )
}
