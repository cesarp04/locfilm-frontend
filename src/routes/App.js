import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Layout from "../components/Layout"
import Home from "../containers/Home"
import Login from "../containers/Login"
import SignIn from "../containers/SignIn"
import MyReservations from "../containers/MyReservations"

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/reservations" component={MyReservations} />
      </Switch>
    </Layout>
  </BrowserRouter>
)
export default App
