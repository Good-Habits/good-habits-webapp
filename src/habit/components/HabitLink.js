import { h } from "preact";
import { Link } from "preact-router/match";

const HabitLink = ({ habit }) => (
  <li className="habit-detail horizontal-centered">
    <Link
      activeClassName="active"
      href={`/habit/${habit.slug}`}
      className="btn vertical-centered"
    >
      {habit.name}
    </Link>
    <button
      type="button"
      className="btn plus horizontal-centered vertical-centered"
    >
      +
    </button>
  </li>
);

export default HabitLink;
