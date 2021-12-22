import React from 'react'
import { Switch, Route} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Motivation from './Motivation'
import BoardsContainer from './BoardsContainer'
import PostsForm from './PostsForm'



const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/motivation' component={Motivation} />
            <Route exact path='/boards' component={BoardsContainer} />
            <Route exact path='/forms' component={PostsForm} />
        </Switch>
    )
}

export default Router;
