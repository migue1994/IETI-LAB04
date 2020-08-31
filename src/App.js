import {BrowserRouter, Switch, Route} from "react-router-dom";
import React from "react";
import Login from "./components/loginComponent/Login";
import MainView from "./components/mainView/MainView";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/mainPage" exact component={MainView}/>
            </Switch>
        </BrowserRouter>
    )
}
