import React, { Component } from 'react'
import { connect } from 'react-redux'

import {fetchBoards} from '../actions/boardsActions'
import Boards from './Boards'


class BoardsContainer extends Component {

    componentDidMount() {
        this.props.fetchBoards()
    }

render() {
        return (
            <div>
                <Boards />
            </div>
        )
    }
}

export default connect(null, {fetchBoards})(BoardsContainer);
