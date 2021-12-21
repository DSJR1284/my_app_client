import React, { Component } from 'react'
import { connect } from 'react-redux'

import {fetchPosts} from '../actions/postsActions'

class PostsContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

render() {
        return (
            <div>
                Posts 
            </div>
        )
    }
}

export default connect(null, {fetchPosts})(PostsContainer);