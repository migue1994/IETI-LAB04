import {BrowserRouter, Switch, Route} from "react-router-dom";
import React from "react";
import Login from "./components/loginComponent/Login";

export default function App(){
  return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}/>
        </Switch>
      </BrowserRouter>
  )
}
