import React from "react";
import { NavLink } from "react-router-dom";

const HabitLink = ({ habit }) => (
  <li className="habit-detail horizontal-centered">
    <NavLink to={`/habit/${habit.slug}`} className="btn vertical-centered">
      {habit.name}
    </NavLink>
    <button
      type="button"
      className="btn plus horizontal-centered vertical-centered"
    >
      +
    </button>
  </li>
);

export default HabitLink;
