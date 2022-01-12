import React from 'react'
import { useDispatch } from 'react-redux'
import { editPost, deletePost } from '../actions/postsActions'

 const Posts = ({post}) => {
     
    const dispatch = useDispatch() 
    
    const handleEdit = (_id) => {
        console.log(_id)
        dispatch(editPost(_id))        
    } 
    
    
    const handleDelete = (_id) => {
        console.log(_id)
        dispatch(deletePost(_id))        
    } 


    return (
        <div>       
        <img src={post.image} alt={post.description}/>
        <br/><br/>
        {post.description} 
        <br/><br/>
        <br/><br/>
        <button onClick= {(e) =>{e.preventDefault(); handleEdit(post.id)}}>Edit</button><br></br><br/>
        <button onClick= {(e) =>{e.preventDefault(); handleDelete(post.id)}}>DELETE</button><br></br><br/>
        </div>
    )
}

export default Posts 