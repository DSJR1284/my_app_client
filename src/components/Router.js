import React from 'react'
import { Switch, Route} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Motivation from './Motivation'
import BoardsContainer from './BoardsContainer'



const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/motivation' component={Motivation} />
            <Route exact path='/boards' component={BoardsContainer} />
        </Switch>
    )
}

export default Router;
