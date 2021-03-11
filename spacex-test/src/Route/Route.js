import React from 'react';
import { Route, Switch } from  'react-router-dom';
import Home from '../Home/Home';
const Routeconfig = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
    </Switch>
)

export default Routeconfig;