export const boardsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_BOARDS':
            return action.payload
            default:
                return state 
    }
}