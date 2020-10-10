import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Layout from "../components/Layout"
import Home from "../containers/Home"
import Login from "../containers/Login"
import SignIn from "../containers/SignIn"
import MyReservations from "../containers/MyReservations"
import UserEdit from "../containers/UserEdit"
import Checkout from "../containers/Checkout"
import UserProfile from "../containers/UserProfile"
import Register from "../components/Register"
import SearchResults from "../containers/SearchResults"
import Details from  "../containers/Details"
import Oops from "../containers/Oops"

const App = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/results" component={SearchResults} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/edit" component={UserEdit} />
        <Route exact path="/locations/:id" component={Details} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/user" component={UserProfile} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/reservations" component={MyReservations} />
        <Route exact path="/oops" component={Oops} />


      </Layout>
    </Switch>
  </BrowserRouter>
)
export default App
