import React from 'react'
import { connect } from 'react-redux'
import { useSelector} from 'react-redux'
import {fetchPosts} from '../actions/postsActions'

const Boards = ({boards,posts}) => {
    const postsState = useSelector(state => state.posts.posts)
    console.log(postsState)
    return (
        <div className='Boards'>
            {boards.map(b => <ol>
                <ul key={b.id}>
                    <h1>{b.title}</h1>
                </ul>            
            </ol>)}
            {posts.map(p => <ul>
                <img src={p.image} alt={p.description}/>
                <br/><br/>
                <li key={p.id}>
                    {p.description}
                    <br/><br />
                </li>
            </ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {boards: state.boards, posts: state.posts}
}

export default connect(mapStateToProps, fetchPosts)(Boards);
