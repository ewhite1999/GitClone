/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import RepoList from ".";
describe("Repo component", () => {
  let repoList;
  let reposArr;
  beforeAll(() => {
    reposArr = [
      {
        name: "3-column-preview-card-component-main",
        description: "A task from frontend mentor",
        stargazers_count: 0,
        language: "HTML",
        forks_count: 0,
        open_issues_count: 0,
        id: 436954790,
      },
      {
        name: "testData",
        description: "A test",
        stargazers_count: 2,
        language: "HTML",
        forks_count: 5,
        open_issues_count: 6,
        id: 23422345,
      },
    ];
  });

  beforeEach(() => {
    render(<RepoList data={reposArr} />);
    repoList = screen.queryByRole("list");
  });

  it("returns an unordered list", () => {
    expect(repoList).toBeTruthy();
  });

  it("has two child elements of li", () => {
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(2);
  });
});
