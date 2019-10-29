import m from "mithril";
import HabitStore from "~/habit/store";

import TopNav from "~/misc/components/TopNav";
import HabitsList from "~/habit/components/HabitsList";

const HabitListView = {
  oninit: HabitStore.loadHabits,
  view() {
    return (
      <>
        <TopNav title="Habits" />
        <main>
          <HabitsList habits={HabitStore.list} />
        </main>
      </>
    );
  }
};

export default HabitListView;
