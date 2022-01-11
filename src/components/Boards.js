import React from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deletePost, fetchPosts } from '../actions/postsActions'

const Boards = ({boards,posts}) => {
    
    const dispatch = useDispatch()    
    
    const handleClick = (_id) => {
        console.log(_id)
        dispatch(deletePost(_id))        
    } 

    return (
        <div className='Boards'>
            {boards.map((board, i) => <ol>
                <ul key={i}>
                    <h1>{board.title}</h1>
                </ul>            
            </ol>)}
            {posts.map((post,i) => <ul key={i} >
                <img src={post.image} alt={post.description}/>
                <br/><br/>
                <li>
                    {post.description}                
                    <br/><br/>
                    <button onClick= {(e) =>{e.preventDefault(); handleClick(post.id)}}>DELETE</button><br></br>
                </li>
            </ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {boards: state.boards, posts: state.posts}
}

export default connect(mapStateToProps,fetchPosts)(Boards);
