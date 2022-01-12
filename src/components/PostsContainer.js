import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchPosts} from '../actions/postsActions'
import Posts from './Posts'


class PostsContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

render() {
    let postList = this.props.posts.map(post => {
        return <Posts key={post.id} post={post} />
    })
        return (
            <div>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {boards: state.boards, posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostsContainer);
