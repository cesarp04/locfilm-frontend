<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import SignIn from '../containers/SignIn';


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/signin" component={ SignIn } />
        </Switch>
    </BrowserRouter>
);
export default App
=======
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../containers/Home"
import Layout from "../components/Layout"
import Login from "../containers/Login"

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Layout>
  </BrowserRouter>
)
export default App
>>>>>>> 6acbadffe040365cb942f91467e78f0876041e93
