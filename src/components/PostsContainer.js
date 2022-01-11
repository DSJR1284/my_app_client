import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchPosts} from '../actions/postsActions'
import Posts from './Posts'


class PostsContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

render() {
        return (
            <div>
                <Posts />
            </div>
        )
    }
}

export default connect(null, {fetchPosts})(PostsContainer);
