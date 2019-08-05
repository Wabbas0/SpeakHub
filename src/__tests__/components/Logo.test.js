import React from "react";
import { create } from "react-test-renderer";
import Logo from "../../components/Logo";

describe("Logo component", () => {
  test("it matches the snapshot when passing speakap logo", () => {
    const component = create(
      <Logo url="https://www.speakap.com/hubfs/favicon.png" />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
