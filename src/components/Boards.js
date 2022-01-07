import React from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import {fetchPosts, deletePost} from '../actions/postsActions'

const Boards = ({boards,posts}) => {
    const dispatch = useDispatch()    
    
    const handleClick = (_id) => {
        

        dispatch(deletePost(_id))
        // posts.deletePost(_id)
    }
    return (
        <div className='Boards'>
            {boards.map(board => <ol>
                <ul key={board.id}>
                    <h1>{board.title}</h1>
                </ul>            
            </ol>)}
            {posts.map(post => <ul key={post.id}>
                <img src={post.image} alt={post.description}/>
                <br/><br/>
                <li>
                    {post.description}                
                    <br/><br/>
                    <button onClick= {() => handleClick(post.id)}>DELETE</button><br></br>
                </li>
            </ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {boards: state.boards, posts: state.posts}
}

// const mapDispatchToProps = dispatch => {
//     return {
//         delete: post => dispatch({ type: "DELETE_POST", payload: post.id})
//     }
// }

export default connect(mapStateToProps,fetchPosts)(Boards);
