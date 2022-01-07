export const postsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload
        case 'ADD_POST':
            return [...state, action.payload]
        case 'DELETE_POST':
            return [...state, state.filter(post => post.id !== action.payload.id)]

            default:
                return state 
    }
}


// return state.filter(element => element !== action.payload);
// case 'DELETE_ENTRY':   
// return state.filter( (entry) => entry.id !== action.payload.id)