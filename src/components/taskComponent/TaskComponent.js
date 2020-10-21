import React, {useEffect, useState} from "react";
import "./TaskComponent.css";
import Card from "@material-ui/core/Card";
import {CardContent} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import {Add} from "@material-ui/icons";
import {useHistory} from "react-router-dom";
import ModalTask from "../modalComponent/ModalTask";
import RequestService from "../../services/RequestService";

export default function TaskComponent(){

    const history = useHistory();
    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        RequestService.getSource('api/tasks')
            .then(data => setTasks(data))
    })

    function handleFab(){
        history.push(`/mainPage/newTask`);
    }

    const taskCard = (task) => (
        <Card variant={"outlined"}>
            <CardContent>
                <h2>{task.description}</h2>
                <div className="block">
                    <h3>{task.status}</h3>
                    <h3>-</h3>
                    <h3>{task.dueDate}</h3>
                </div>
                <h3>{task.responsible.firstname} {task.responsible.lastname}</h3>
            </CardContent>
        </Card>
    )

    return(
        <div className="task-background">
            <ModalTask/>
            {tasks && tasks.map((task, index) => (
                <div className="card-view" key={index}>
                    {taskCard(task)}
                </div>
            ))}
            <div className="fab-container">
                <Fab color="primary" aria-label="add" className="fab" onClick={handleFab}>
                    <Add />
                </Fab>
            </div>
        </div>
    )
}
