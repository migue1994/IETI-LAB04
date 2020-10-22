import React, {useEffect} from "react";
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import "./MainView.css";
import DrawerComponent from "../drawerComponent/DrawerComponent";
import {useSelector} from "react-redux";
import NewTask from "../newTaskComponent/NewTask";
import {useHistory} from 'react-router-dom';

export default function MainView(getFlag) {

    let {path} = useRouteMatch();
    const generalPath = useSelector(state => state.pathReducer);
    const history = useHistory();

    useEffect(() => {
        if(!JSON.parse(localStorage.getItem('user'))){
            history.push('/')
        }
    }, [history])

    return (
        <div className='view-background'>
            <DrawerComponent/>

            <div className="router-container">
                <Switch>
                    {generalPath.map((route, index) => (
                        <Route key={index} path={`${path}/${route.path}`} component={route.component}/>
                    ))}
                    <Route path={`${path}/newTask`} component={NewTask}/>
                </Switch>
            </div>
        </div>
    )
}
