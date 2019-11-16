import React from "react";
import axios from "axios";
import { shallow } from "enzyme";

import HabitListView from "../../../src/habit/views/HabitListView";
import HabitsList from "../../../src/habit/components/HabitsList";
import Error from "../../../src/misc/components/Error";
import Spinner from "../../../src/misc/components/Spinner";

jest.mock("axios");

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

describe("<HabitListView />", () => {
  it("Renders spinner while request is made", () => {
    axios.get.mockResolvedValue({ data: [{ name: "test", slug: "test" }] });
    const view = shallow(<HabitListView />);
    expect(axios.get).toHaveBeenCalled();
    expect(view.find(Spinner).exists()).toBeTruthy();
  });

  it("Renders error message when request failed", async () => {
    axios.get.mockRejectedValue("Error while loading the Habits");
    const view = shallow(<HabitListView />);
    expect(axios.get).toHaveBeenCalled();
    await sleep(2);
    expect(view.state("error")).toEqual("Error while loading the Habits");
    expect(view.find(Error).exists()).toBeTruthy();
  });

  it("Renders List component when request is done", async () => {
    axios.get.mockResolvedValue({ data: [{ name: "test", slug: "test" }] });
    const view = shallow(<HabitListView />);
    expect(axios.get).toHaveBeenCalled();
    await sleep(2);
    expect(view.state("habits")).toEqual([{ name: "test", slug: "test" }]);
    expect(view.find(HabitsList).exists()).toBeTruthy();
  });
});
