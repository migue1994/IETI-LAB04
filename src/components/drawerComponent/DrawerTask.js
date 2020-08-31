import React, {useState} from "react";
import Drawer from "@material-ui/core/Drawer";
import {ExitToApp, Menu} from "@material-ui/icons";
import "./Drawer.css";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import {useHistory} from 'react-router-dom';

export default function DrawerTask(){

    const history = useHistory();
    const [state, setState] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));

    function logOut(){
        localStorage.removeItem('user');
        history.push('/');
    }

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };

    return(
        <div className="container">
            <IconButton onClick={toggleDrawer(true)} >
                <Menu className="icon"/>
            </IconButton>
            <Drawer
                open={state}
                onClose={toggleDrawer(false)}
                anchor={'left'}
            >
                <div
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                    className="backgroundDrawer"
                >
                    <div className="data">
                        <img src={"/img/user.jpg"} alt="user"/>
                        <div className="data2">
                            <h3>{user.name}</h3>
                            <p>{user.username}</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="data3">
                        <div>
                            <p><span>Last Name: </span>{user.lastName}</p>
                            <p><span>Phone Number: </span>{user.phoneNumber}</p>
                            <p><span>Address: </span>{user.address}</p>
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
