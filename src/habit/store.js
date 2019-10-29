import m from "mithril";

const HabitStore = {
  list: [],
  detail: {},
  loadHabits() {
    m.request({
      method: "GET",
      url: "/api/habit/list",
      // Enable sending cookies
      withCredentials: true
    }).then(data => {
      HabitStore.list = data;
    });
  },
  loadDetail(vnode) {
    const habitSlug = vnode.attrs.key;
    m.request({
      method: "GET",
      url: `/api/habit/${habitSlug}`,
      withCredentials: true
    }).then(data => {
      HabitStore.detail = data;
    });
  }
};

export default HabitStore;
