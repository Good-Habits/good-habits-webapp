import m from "mithril";
import Habit from "~/habit/store";

import TopNav from "~/misc/components/TopNav";
import HabitsList from "~/habit/components/HabitsList";

const HabitListView = {
  oninit: Habit.loadHabits,
  view() {
    return (
      <>
        <TopNav title="Habits" />
        <main>
          <HabitsList habits={Habit.list} />
        </main>
      </>
    );
  }
};

export default HabitListView;
