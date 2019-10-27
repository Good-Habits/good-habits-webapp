import m from "mithril";
import Habit from "../store";

import HabitLink from "../components/HabitLink";

const HabitListView = {
  oninit: Habit.loadHabits,
  view() {
    return m(
      "ul.habit-list",
      Habit.list.map(habit => {
        return m("li", m(HabitLink, { habit: habit }));
      })
    );
  }
};

export default HabitListView;
