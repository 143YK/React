import { render, screen } from "@testing-library/react";
import App from "./App";


import { shallow } from "enzyme";

describe("Couter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App></App>);
  });

  test("renders learn react link", () => {
    expect(wrapper.find("h1").text()).toContain("Counter");
  });

  test("checking the button increment", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });
  test("initial value of counter state to zero", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("Checking counter click event of increment button and increment of counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("Checking counter click event of decrement button and decrement of counter value", () => {
    expect(wrapper.find("#decrement-btn").text()).toBe("Decrement");

    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");

    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});
