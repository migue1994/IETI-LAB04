import TaskComponent from "../../components/taskComponent/TaskComponent";
import UserProfile from "../../components/userProfileComponent/UserProfile";

const initialState = [
    {
        path: 'tasks',
        component: TaskComponent,
        name: 'My tasks'
    },
    {
        path: 'userProfile',
        component: UserProfile,
        name: 'Update profile'
    }
]


const pathReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default pathReducer;
