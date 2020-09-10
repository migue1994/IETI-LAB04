import React, {useState} from "react";
import "./ModalTask.css";
import Modal from "@material-ui/core/Modal";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Backdrop} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {Filter} from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import AllActions from "../../redux/actions/AllActions";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}));

export default function () {

    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const [task, setTask] = useState(null);
    const tasks = useSelector(state => state.taskStore.tasks)
    const dispatch = useDispatch();

    function handleApply() {
        if (task && task.dueDate && task.responsible && task.status){
            const filtered = tasks.filter(t => (t.dueDate === task.dueDate && t.status === task.status && t.responsible.name === task.responsible));
            dispatch(AllActions.FilterAction.UPDATE_FILTER(filtered))
            setOpen(!open);
        }else{
            alert('Please fill all white spaces')
        }
    }

    function handleOpen() {
        setOpen(!open);
    }

    function handleTask(event) {
        setTask({...task, [event.target.name]: event.target.value});
    }

    function handleClear() {
        setTask(null);
        dispatch(AllActions.FilterAction.CLEAN_FILTER());
        setOpen(!open);
    }

    return (
        <div className="modal-background">
            <div>
                <Fab color="secondary" aria-label="edit" onClick={handleOpen}>
                    <Filter/>
                </Fab>
                <Modal
                    open={open}
                    onClose={handleOpen}
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <div className={classes.paper}>
                        <h1>TASK FILTERS</h1>
                        <form>
                            <TextField
                                fullWidth
                                label={'Due Date'}
                                name={"dueDate"}
                                onChange={handleTask}
                                value={task && task.dueDate ? task.dueDate : ''}
                                required
                            />
                            <TextField
                                fullWidth
                                label={'Responsible'}
                                name={"responsible"}
                                onChange={handleTask}
                                value={task && task.responsible ? task.responsible : ''}
                                required
                            />
                            <TextField
                                fullWidth
                                label={'Status'}
                                name={"status"}
                                onChange={handleTask}
                                value={task && task.status ? task.status : ''}
                                required
                            />
                            <Button
                                color={"primary"}
                                variant={"contained"}
                                fullWidth
                                className="button-modal"
                                onClick={handleApply}
                            >
                                Apply
                            </Button>
                            <Button
                                color={"secondary"}
                                variant={"contained"}
                                fullWidth
                                className="button-modal"
                                onClick={handleClear}
                            >
                                Clear All
                            </Button>
                        </form>
                    </div>
                </Modal>
            </div>
        </div>
    )
}