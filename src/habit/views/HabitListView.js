import React from "react";
import axios from "axios";

import TopNav from "../../misc/components/TopNav";
import Spinner from "../../misc/components/Spinner";
import Error from "../../misc/components/Error";
import HabitsList from "../components/HabitsList";

class HabitListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: "", loading: true, habits: [] };
  }
  componentDidMount() {
    const fetchHabits = async () => {
      const url = "/api/habit/list";
      try {
        const response = await axios.get(url);
        this.setState({ habits: response.data });
      } catch (e) {
        this.setState({ error: "Error while loading the Habits" });
        console.log(e);
      }
      this.setState({ loading: false });
    };
    fetchHabits.bind(this)();
  }
  render() {
    if (this.state.error) {
      return (
        <>
          <TopNav title="Habits" />
          <main>
            <Error message={this.state.error} />
          </main>
        </>
      );
    }

    return (
      <>
        <TopNav title="Habits" />
        <main>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <HabitsList habits={this.state.habits} />
          )}
        </main>
      </>
    );
  }
}

export default HabitListView;
