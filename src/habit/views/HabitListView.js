import { Fragment, h } from "preact";
import { useState, useEffect } from "preact/hooks";

import TopNav from "../../misc/components/TopNav";
import Spinner from "../../misc/components/Spinner";
import HabitsList from "../components/HabitsList";

const HabitListView = () => {
  const [loading, setLoading] = useState(true);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const url = "/api/habit/list";
        const response = await fetch(url, { credentials: "same-origin" });
        const data = await response.json();
        setHabits(data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchHabits();
  }, []);

  return h(
    Fragment,
    h(TopNav, { title: "Habits" }),
    h("main", loading ? h(Spinner) : h(HabitsList, { habits: habits }))
  );
};

export default HabitListView;
