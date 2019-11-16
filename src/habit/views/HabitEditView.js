import React, { useState, useEffect } from "react";

import TopNav from "../../misc/components/TopNav";
import Spinner from "../../misc/components/Spinner";
import EditForm from "../components/EditForm";

const HabitEditView = props => {
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
      <main>{loading ? <Spinner /> : <EditForm initial={habit} />}</main>
    </>
  );
};

export default HabitEditView;
