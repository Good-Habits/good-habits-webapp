import m from "mithril";
import HabitStore from "~/habit/store";
import TopNav from "~/misc/components/TopNav";
import HabitHeader from "~/habit/components/HabitHeader";

const HabitDetailView = {
  oninit: HabitStore.loadDetail,
  view() {
    return (
      <>
        <TopNav title="Details" />
        <main>
          <HabitHeader habit={HabitStore.detail} />
        </main>
      </>
    );
  }
};

export default HabitDetailView;
