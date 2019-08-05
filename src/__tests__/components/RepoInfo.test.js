import React from "react";
import { create } from "react-test-renderer";
import RepoInfo from "../../components/RepoInfo";

describe("RepoInfo component", () => {
  test("it matches the snapshot when passing all required props", () => {
    const component = create(
      <RepoInfo
        repoName="react"
        repoOwner="facebook"
        issuesCount={10}
        pullsCount={20}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
