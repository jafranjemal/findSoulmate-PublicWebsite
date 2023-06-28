import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Register from "./Register";
import App from "./App";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Header />
      <Route exact path="/register" component={<Register />} />
      <Route exact path="/" component={App} />
    </div>
  </Router>,
  document.getElementById("root")
);
