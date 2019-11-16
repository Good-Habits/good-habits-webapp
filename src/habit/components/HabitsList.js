import {h} from 'preact';
import HabitLink from "./HabitLink";

const HabitsList = ({ habits }) => (
  h('ul', {class: 'habit-list'},
    ...habits.map(habit => h(HabitLink, {habit: habit})))
);

export default HabitsList;
