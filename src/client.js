import m from "mithril";
import HabitListView from "./habit/views/HabitListView";
import HabitDetailView from "./habit/views/HabitDetailView";

const root = document.getElementById("app");

if (root) {
  m.route(
    root,
    // default route, "/" will be redirected here
    "/app",
    {
      "/app": HabitListView,
      // https://mithril.js.org/route.html#key-parameter
      // forcing the component to recreate itself, instead of updating
      "/habit/:key": HabitDetailView
    }
  );
} else {
  console.warn("Can't find #app element on the page!");
}
