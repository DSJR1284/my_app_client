import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addPost } from '../actions/postsActions'

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
                <h1>More About ME</h1>
                <br/><br/>
                <h3>Please Fill Out The Form Below To Add To Your Board</h3>
                <br/><br/>
                <form onSubmit={this.handleSubmit}>
                <label>Image: </label>
                    <input type='photo' id="photo" value={this.state.image} onChange={this.handleChange} name="image" />
                    {/* <button>Upload Image</button> */}
                <br /> <br />
                <label>Description: </label>
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
