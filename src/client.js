// Enable async/await for Browser
import "@babel/polyfill";

import Router from 'preact-router';
import {h, render} from 'preact';

import HabitListView from "./habit/views/HabitListView";
// import HabitDetailView from "./habit/views/HabitDetailView";
// import HabitEditView from "./habit/views/HabitEditView";

const App = () => (
  h(Router,
    // h('HabitEditView', {path: '/habit/:slug/edit'}),
    // h('HabitDetailView', {path: "/habit/:slug"}),
    h(HabitListView, {path: "/"}),
  )
);

const root = document.getElementById("app");
if (root) {
  render(h(App), root);
} else {
  console.error("Can't find #app element on the page!");
}
