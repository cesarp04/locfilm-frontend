import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../containers/Home"
import Login from "../containers/Login"
import SignIn from "../containers/SignIn"

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signin" component={SignIn} />
    </Switch>
  </BrowserRouter>
)
export default App
