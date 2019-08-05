import React from "react";
import Enzyme from "../../config/enzyme";
import NavBar from "../../components/NavBar";

describe("NavBar component", () => {
  let wrapper;

  it("renders a nav elements that contains logo and menu", () => {
    wrapper = Enzyme.shallow(
      <NavBar
        logo="https://www.speakap.com/hubfs/favicon.png"
        user={{ userName: "WG75" }}
        menuItems={[{ itemName: "Pull requests" }, { itemName: "Issues" }]}
      />
    );

    expect(wrapper.find("nav").length).toBe(1);
    expect(wrapper.find("Logo").length).toBe(1);
    expect(wrapper.find("Menu").length).toBe(1);
  });

  it("toggles the state of mobileMenu when burger menu is clicked", () => {
    expect(wrapper.state().mobileMenuIsOpen).toBe(false);

    wrapper
      .find("Icon")
      .props()
      .onClick();
    expect(wrapper.state().mobileMenuIsOpen).toBe(true);
  });
});
