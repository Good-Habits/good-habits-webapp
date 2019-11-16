import {h} from 'preact'
import { Link } from 'preact-router/match';

const HabitHeader = ({ habit }) => (
  h('div', {class: 'habit-header'},
    h('Link', {href: "/"}, "« back"),
    h('h2', habit.name),
    h('Link', {href: `/habit/${habit.slug}/edit`}, "edit"),
  )
);

export default HabitHeader;
