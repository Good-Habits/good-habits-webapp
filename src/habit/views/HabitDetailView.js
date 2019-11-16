import React, { useState, useEffect } from "react";

import TopNav from "../../misc/components/TopNav";
import Spinner from "../../misc/components/Spinner";
import HabitHeader from "../components/HabitHeader";

const HabitDetailView = props => {
  const [loading, setLoading] = useState(true);
  const [habit, setHabit] = useState({});

  useEffect(() => {
    const fetchHabitDetails = async () => {
      try {
        const url = `/api/habit/${props.match.params.slug}`;
        const response = await fetch(url, { credentials: "same-origin" });
        const data = await response.json();
        setHabit(data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchHabitDetails();
  }, []);

  return (
    <>
      <TopNav title="Details" />
      <main>{loading ? <Spinner /> : <HabitHeader habit={habit} />}</main>
    </>
  );
};

export default HabitDetailView;
