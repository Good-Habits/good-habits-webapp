import m from "mithril";

const HabitLink = {
  view(vnode) {
    const { habit } = vnode.attrs;
    return (
      <li className="habit-detail horizontal-centered">
        <a href="#" className="btn vertical-centered">
          {habit.name}
        </a>
        <button
          type="button"
          className="btn plus horizontal-centered vertical-centered"
        >
          +
        </button>
      </li>
    );
  }
};

export default HabitLink;
