import React from 'react'
import { connect } from 'react-redux'
import { useSelector} from 'react-redux'
import {fetchPosts} from '../actions/postsActions'

const Boards = ({boards,posts}) => {
    const postsState = useSelector(state => state.posts.posts)
    console.log(postsState)
    return (
        <div className='Boards'>
            {boards.map(b => <ul>
                <li key={b.id}>
                    {b.title}
                </li>            
            </ul>)}
            {posts.map(p => <ul>
                <li key={p.id}>
                    {p.image}
                    {p.description}
                </li>
            </ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {boards: state.boards, posts: state.posts}
}

export default connect(mapStateToProps, fetchPosts)(Boards);
