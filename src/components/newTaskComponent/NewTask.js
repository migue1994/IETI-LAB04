import React, {useState} from "react";
import "./NewTask.css";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import Responsible from "./Responsible";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import RequestService from "../../services/RequestService";

const options = [
    'Ready',
    'In progress',
    'Done'
]

export default function NewTask() {

    const [time, setTime] = useState(new Date());
    const [task, setTask] = useState({status:'', dueDate: `${time.getDate()}-${time.getMonth() + 1}-${time.getFullYear()}`});
    const [responsible, setResponsible] = useState(undefined);

    const history = useHistory();

    function handleChange(event) {
        setTask({...task, [event.target.name]: event.target.value});
    }

    function handleDateChange(date) {
        setTask({...task, dueDate: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`});
        setTime(date);
    }

    function submit() {
        const newTask = {
            description: task.description,
            status: task.status,
            responsible: responsible,
            dueDate: task.dueDate
        };
        RequestService.postResource('api/task', newTask)
        history.push('/mainPage/tasks')
    }

    return (
        <div className="newTask-background">
            <div className="card">
                <h1>New task</h1>
                <form onSubmit={submit}>
                    <TextField
                        fullWidth
                        name={'description'}
                        label={"Description"}
                        onChange={handleChange}
                        required
                    />
                    <Responsible responsible={responsible} setResponsible={setResponsible}/>
                    <FormControl>
                        <InputLabel id={'id-status'}>Status</InputLabel>
                        <Select
                            labelId={'id-status'}
                            name={'status'}
                            value={task.status}
                            onChange={handleChange}
                            label={'Status'}
                            required
                        >
                            {options.map((option, index) => (
                                <MenuItem value={option} key={index}>{option}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            name={'dueDate'}
                            label="Date picker inline"
                            value={time}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <Button
                        color={"primary"}
                        variant={"contained"}
                        type={"submit"}
                    >
                        Add
                    </Button>
                </form>
            </div>
        </div>
    )
}
