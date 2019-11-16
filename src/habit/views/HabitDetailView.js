import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";

import TopNav from "../../misc/components/TopNav";
import Spinner from "../../misc/components/Spinner";
import HabitHeader from "../components/HabitHeader";

const HabitDetailView = props => {
  const [loading, setLoading] = useState(true);
  const [habit, setHabit] = useState({});

  useEffect(() => {
    const fetchHabitDetails = async () => {
      try {
        const url = `/api/habit/${props.slug}`;
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
    <Fragment>
      <TopNav title="Details" />
      <main>{loading ? <Spinner /> : <HabitHeader habit={habit} />}</main>
    </Fragment>
  );
};

export default HabitDetailView;
