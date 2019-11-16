// Enable async/await for Browser
import "@babel/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HabitListView from "./habit/views/HabitListView";
import HabitDetailView from "./habit/views/HabitDetailView";
import HabitEditView from "./habit/views/HabitEditView";

const App = () => (
  <Router>
    <Switch>
      <Route path="/habit/:slug/edit" component={HabitEditView} />
      <Route path="/habit/:slug" component={HabitDetailView} />
      <Route path="/" component={HabitListView} />
    </Switch>
  </Router>
);

const root = document.getElementById("app");
if (root) {
  ReactDOM.render(<App />, root);
} else {
  console.error("Can't find #app element on the page!");
}
