import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './componets/home'
import About from './componets/about'
import Motavation from './componets/motavation'
import BoardsContainer from './BoardsContainer'



 function Router() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/motavation' component={Motavation} />
            <Route exact path='/Boards' component={BoardsContainer} />
        </Switch>
    )
}

export default Router;
