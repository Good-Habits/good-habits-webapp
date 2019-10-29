import m from "mithril";

const HabitHeader = {
  view(vnode) {
    const { habit } = vnode.attrs;
    const backUrl = m(m.route.Link, { href: "/app" }, "« back");
    return (
      <div class="habit-header">
        {backUrl}
        <h2>{habit.name}</h2>
        <a href="#">edit</a>
      </div>
    );
  }
};

export default HabitHeader;
