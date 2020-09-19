import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Home2 from '../containers/Home2';
import Login from '../containers/Login';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route extact path="/" component={Home} />
            <Route extact path="/prueba" component={Home2} />
            <Route extact path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
);
export default App