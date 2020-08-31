import React from "react";
import "./MainView.css";
import Card from "@material-ui/core/Card";
import DrawerTask from "../drawerComponent/DrawerTask";
import {CardContent} from "@material-ui/core";

const tasks = [
    {
        "description": "Implement login view",
        "responsible": {
            "name": "Miguel Rivera",
            "email": "miguel@email.com"
        },
        "status": "Ready",
        "dueDate": '12-05-2019'
    },
    {
        "description": "Implement login controller",
        "responsible": {
            "name": "Miguel Rivera",
            "email": "miguel@email.com"
        },
        "status": "In Progress",
        "dueDate": '12-05-2019'
    },
    {
        "description": "Facebook Integration",
        "responsible": {
            "name": "Miguel Rivera",
            "email": "miguel@email.com"
        },
        "status": "Completed",
        "dueDate": '12-05-2019'
    }
]

export default function MainView(){

    const taskCard = (task) => (
        <Card variant={"outlined"}>
            <CardContent>
                <h2>{task.description}</h2>
                <div className="block">
                    <h3>{task.status}</h3>
                    <h3>-</h3>
                    <h3>{task.dueDate}</h3>
                </div>
                <h3>{task.responsible.name}</h3>
            </CardContent>
        </Card>
    )

    return(
        <div className="view-background">
            <DrawerTask/>
            {tasks.map((task, index) => (
                <div className="card-view" key={index}>
                    {taskCard(task)}
                </div>
            ))}
        </div>
    )
}
