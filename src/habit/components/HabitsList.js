import m from "mithril";
import HabitLink from "./HabitLink";

const HabitsList = {
  view(vnode) {
    const { habits } = vnode.attrs;
    return (
      <ul className="habit-list">
        {habits.map(habit => (
          <HabitLink habit={habit} key={habit.slug} />
        ))}
      </ul>
    );
  }
};

export default HabitsList;
