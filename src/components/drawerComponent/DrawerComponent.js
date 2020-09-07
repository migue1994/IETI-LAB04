import IconButton from "@material-ui/core/IconButton";
import {ExitToApp, Menu} from "@material-ui/icons";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import {Link, useHistory, useRouteMatch} from "react-router-dom";
import "../mainView/MainView.css";
import {useSelector} from "react-redux";

export default function DrawerComponent(){

    const history = useHistory();
    const [state, setState] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    let {url} = useRouteMatch();
    const generalPath = useSelector(state => state.paths);

    function logOut() {
        localStorage.removeItem('userLogged');
        history.push('/');
        window.location.reload();
    }

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };

    return(
        <div className="container">
            <IconButton onClick={toggleDrawer(true)}>
                <Menu className="icon"/>
            </IconButton>
            <Drawer
                open={state}
                onClose={toggleDrawer(false)}
                anchor={'left'}
            >
                <div
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                    className="backgroundDrawer"
                >
                    <div className="data">
                        <img src={"/img/user.jpg"} alt="user"/>
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.username}</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="data3">
                        <div className="link-container">
                            <List>
                                {generalPath.map((route, index) => (
                                    <ListItem className="list-item" button key={index}>
                                        <Link className="link" to={`${url}/${route.path}`}>{route.name}</Link>
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                        <Button
                            variant={"contained"}
                            startIcon={<ExitToApp/>}
                            className="button"
                            onClick={logOut}
                        >
                            Logout
                        </Button>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}
