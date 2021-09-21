/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss";

import Index from "./views/Index.js";
import Login from "./views/pages/Login.js"
import Home from "./views/pages/Home.js";
import Profile from "./views/examples/Profile.js"
import Recent from "./views/pages/Recent.js";
import AllRecipes from "./views/pages/AllRecipes.js";
import AddNew from "./views/pages/AddNew.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route
        path="/home"
        exact
        render={props => <Home {...props} />}
      />
      <Route path="/login" exact render={props => <Login {...props} />} />
      <Route
        path="/profile"
        exact
        render={props => <Profile {...props} />}
      />

      <Route path="/recent" exact render={props => <Recent {...props} />} />
      <Route path="/all-recipes" exact render={props => <AllRecipes {...props} />} />
      <Route path="/add-new" exact render={props => <AddNew {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
