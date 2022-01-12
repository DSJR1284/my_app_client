export const postsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload
        case 'ADD_POST':
            return [...state, action.payload]    
        case 'EDIT_POST':             
            const newPost = state.post.map(post => post.id !== action.payload.id ? post : action.payload )
            return { newPost }
        case 'DELETE_POST':
            const newState = [...state].filter(post => post.id !== action.payload)      
            return newState             
            default:
                return state 
    }
}

