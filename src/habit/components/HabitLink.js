import m from "mithril";

const HabitLink = {
  view(vnode) {
    const { habit } = vnode.attrs;
    // JSX is cool, but we need to use Mithril
    // router Link element to get the key passed to the store.
    const link = m(
      m.route.Link,
      { href: `/habit/${habit.slug}`, class: "btn vertical-centered" },
      habit.name
    );
    return (
      <li className="habit-detail horizontal-centered">
        {link}
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
