const initialState = {
    filtered : []
}

const filterStore = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_FILTER':
            return{
                ...state,
                filtered: action.payload
            }
        case 'CLEAN_FILTER':
            return {
                ...state,
                filtered: []
            }
        default:
            return state
    }
}

export default filterStore;