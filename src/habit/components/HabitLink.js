import { h } from "preact";
import { Link } from "preact-router/match";

const HabitLink = ({ habit }) =>
  h(
    "li",
    { class: "habit-detail horizontal-centered" },
    h(
      Link,
      { href: `/habit/${habit.slug}`, class: "btn vertical-centered" },
      habit.name
    ),
    h(
      "button",
      {
        type: "button",
        class: "btn plus horizontal-centered vertical-centered"
      },
      "+"
    )
  );

export default HabitLink;
