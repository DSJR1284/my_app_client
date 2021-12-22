import React, { Component } from 'react'
import {connect} from 'react-redux'

import { addPost} from '../actions/postsActions'

class PostsForm extends Component {

    state = {
        image: "",
        description: "",
        board_id: 1
    }

    handleChange = (e)=> {
        const {name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        // e.preventDefault()
        this.props.addPost(this.state)
    }

    render() {
        return (
            <div className='Form'>
                <form onSubmit={this.handleSubmit}>
                <label>Image:</label>
                    <input type='text' value={this.state.image} onChange={this.handleChange} name="image" />
                <br /> <br />
                <label>Description:</label>
                    <textarea type='text' value={this.state.description} onChange={this.handleChange} name="description" /> 
                <br /><br />
                <input type='submit' value="Add Posts" />
                <input type="hidden" value={this.state.board_id} name="board_id"/>
                </form>
            </div>
        )
    }
}

export default connect(null,{addPost})(PostsForm);
