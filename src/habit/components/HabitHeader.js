import { h } from "preact";
import { Link } from "preact-router/match";

const HabitHeader = ({ habit }) => (
  <div className="habit-header">
    <Link activeClassName="active" href="/">
      « back
    </Link>
    <h2>{habit.name}</h2>
    <Link activeClassName="active" href={`/habit/${habit.slug}/edit`}>
      edit
    </Link>
  </div>
);

export default HabitHeader;
