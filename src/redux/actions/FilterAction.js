const UPDATE_FILTER = (filter) => {
    return{
        type: 'UPDATE_FILTER',
        payload: filter
    };
}

const CLEAN_FILTER = () => {
    return {
        type: 'CLEAN_FILTER'
    }
}

export default {
    UPDATE_FILTER,
    CLEAN_FILTER
}