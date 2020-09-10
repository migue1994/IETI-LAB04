const initialState = {
    tasks: [
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
            }
            ,
            "status": "Completed",
            "dueDate": '12-05-2019'
        }
    ]
}

const taskStore = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: {...action.payload}
            }
        default:
            return state
    }
}

export default taskStore;