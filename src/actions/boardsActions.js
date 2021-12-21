export const fetchBoards = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/boards')
        .then(resp => resp.json())
        .then(boards => dispatch({ type: 'FETCH_BOARDS', payload: boards}))
    }
}