import React, { Component } from 'react'
import { connect } from 'react-redux'

import {fetchPosts} from '../actions/postsActions'
import PostsForm from './PostsForm'

class PostsContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

render() {
        return (
            <div>
                Posts 
                <PostsForm />
            </div>
        )
    }
}

export default connect(null, {fetchPosts})(PostsContainer);