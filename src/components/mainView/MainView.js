import React, {useEffect} from "react";
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import "./MainView.css";
import DrawerComponent from "../drawerComponent/DrawerComponent";
import {useSelector} from "react-redux";

export default function MainView() {

    let {path} = useRouteMatch();
    const generalPath = useSelector(state => state.paths);

    useEffect(() => {
        console.log(generalPath);
    })

    return (
        <div className='view-background'>
            <DrawerComponent/>
            <div className="router-container">
                {/*<Switch>*/}
                {/*    {generalPath.map((route, index) => (*/}
                {/*        <Route key={index} path={`${path}/${route.path}`} component={route.component}/>*/}
                {/*    ))}*/}
                {/*</Switch>*/}
            </div>
        </div>
    )
}
