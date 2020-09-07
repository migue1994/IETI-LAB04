import TaskComponent from "../../components/taskComponent/TaskComponent";
import NewTask from "../../components/newTaskComponent/NewTask";

const initialState = {
    paths:[
        {
            path: 'tasks',
            component: TaskComponent,
            name: 'My tasks'
        },
        {
            path: 'new',
            component: NewTask,
            name: 'new'
        }
    ]
}

const pathReducer = (state= initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default pathReducer;
