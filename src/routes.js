import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Index from './pages/index/index'
import Usuario from './pages/details/details'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = '/' component={Index}/>
            <Route path = '/usuarios/:id' component={Usuario}/>
        </Switch>
    </BrowserRouter>
)

export default Routes