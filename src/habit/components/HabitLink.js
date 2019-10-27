import m from "mithril";

const HabitLink = {
  view(vnode) {
    const { habit } = vnode.attrs;
    return m("a", { href: "#", class: "habit-detail" }, habit.name);
  }
};

export default HabitLink;
