import m from "mithril";

const Habit = {
  list: [],
  loadHabits() {
    m.request({
      method: "GET",
      url: "/api/habit/list",
      // Enable sending cookies
      withCredentials: true
    }).then(data => {
      Habit.list = data;
    });
  }
};

export default Habit;
