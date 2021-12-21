import React, { Component } from 'react'

class PostsForm extends Component {

    state = {
        image: "",
        description: "",
        board_id: ""
    }

    render() {
        return (
            <div>
                Post Form
                <form>
                <label>Image:</label>
                    <input type='text' value={this.state.image} onChange={this.handleChange} name="image" />
                <br />
                <label>Description:</label>
                    <input type='text' value={this.state.description} onChange={this.handleChange} name="description" /> 
                <br />
                <input type='submit' value="Add Posts" />
                </form>
            </div>
        )
    }
}

export default PostsForm;
