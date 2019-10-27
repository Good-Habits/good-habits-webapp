import m from "mithril";
import HabitListView from "./habit/views/HabitListView";

const root = document.getElementById("app");

if (root) {
  m.route(
    root,
    // default route, "/" will be redirected here
    "/app",
    {
      "/app": HabitListView
    }
  );
} else {
  console.warn("Can't find #app element on the page!");
}
