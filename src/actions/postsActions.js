export const fetchPosts = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/posts')
        .then(resp => resp.json())
        .then(posts => dispatch({ type: 'FETCH_POSTS', payload: posts}))
    }
}

export const addPost = (post) => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(post => dispatch({ type: 'ADD_POST', payload: post}))
    }
}

export const deletePost = _id => {
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/posts/${_id}`, {
            method: 'DELETE',
        })
        .then(resp => resp.json())
        .then(post => dispatch({ type: 'DELETE_POST', payload: post.id}))
    }
}


