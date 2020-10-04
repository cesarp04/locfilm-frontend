import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Layout from "../components/Layout"
import Home from "../containers/Home"
import Login from "../containers/Login"
import SignIn from "../containers/SignIn"
import MyReservations from "../containers/MyReservations"
import UserEdit from "../containers/UserEdit"
import Details from "../containers/Details"
import UserProfile from "../containers/UserProfile"


const App = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/edit" component={UserEdit} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/user" component={UserProfile} />
        <Route exact path="/reservations" component={MyReservations} />
      </Layout>
    </Switch>
  </BrowserRouter>
)
export default App
