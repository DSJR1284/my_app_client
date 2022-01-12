import React from 'react'
import { connect } from 'react-redux'
import PostsContainer from './PostsContainer'

const Boards = ({boards}) => {
    

    return (
        <div className='Boards'>
            {boards.map((board, i) => <ol key={i}>
                <ul>
                    <h1>{board.title}</h1>
                </ul>            
            </ol>)}
            <PostsContainer />
        </div>
    )
}

const mapStateToProps = state => {
    return {boards: state.boards}
}

export default connect(mapStateToProps)(Boards);
