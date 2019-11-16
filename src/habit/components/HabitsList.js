import React from "react";

import HabitLink from "./HabitLink";

const HabitsList = ({ habits }) => (
  <ul className="habit-list">
    {habits.map(habit => (
      <HabitLink key={habit.slug} habit={habit} />
    ))}
  </ul>
);

export default HabitsList;
