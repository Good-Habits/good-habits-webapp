import React from "react";
import { NavLink } from "react-router-dom";

const HabitHeader = ({ habit }) => (
  <div className="habit-header">
    <NavLink to="/">« back</NavLink>
    <h2>{habit.name}</h2>
    <NavLink to={`/habit/${habit.slug}/edit`}>edit</NavLink>
  </div>
);

export default HabitHeader;
