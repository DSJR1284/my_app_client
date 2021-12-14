export const gameReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_GAMES':
            return action.payload
            default:
                return state 
    }
}