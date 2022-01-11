export const postsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload
        case 'ADD_POST':
            return [...state, action.payload]
        case 'DELETE_POST':
            const newState = [...state].filter(post => post.id !== action.payload)
            // debugger;
            return newState 
            default:
                return state 
    }
}

