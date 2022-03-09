/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Repo from ".";
describe("Repo component", () => {
  let repoData;
  let repo;
  let component;

  beforeAll(() => {
    repoData = {
      name: "3-column-preview-card-component-main",
      description: "A task from frontend mentor",
      stargazers_count: 0,
      language: "HTML",
      forks_count: 0,
      open_issues_count: 0,
    };
  });
  beforeEach(() => {
    component = render(<Repo data={repoData} />);
    repo = screen.queryByRole("listitem");
  });

  it("returns a list item", () => {
    expect(repo).toBeTruthy();
  });

  it("contains a repo name", () => {
    expect(repo.textContent).toContain("3-column-preview-card-component-main");
  });

  it("contains a description", () => {
    expect(repo.textContent).toContain("A task from frontend mentor");
  });

  it("tells you what the main language used was", () => {
    expect(repo.textContent).toContain("HTML");
  });

  describe("stargazers", () => {
    it("doesn't display stargazers if there are none", () => {
      expect(repo.textContent).not.toContain("stargazers");
    });
    it("displays stargazers if the value is > 0", () => {
      component.unmount();
      repoData.stargazers_count = 2;
      render(<Repo data={repoData} />);
      const tempRepo = screen.queryByRole("listitem");

      expect(tempRepo.textContent).toContain("stargazers");
    });
  });

  describe("forks", () => {
    it("doesn't display forks if there are none", () => {
      expect(repo.textContent).not.toContain("forks");
    });
    it("displays forks if the value is > 0", () => {
      component.unmount();
      repoData.forks_count = 2;
      render(<Repo data={repoData} />);
      const tempRepo = screen.queryByRole("listitem");

      expect(tempRepo.textContent).toContain("forks");
    });
  });

  describe("issues", () => {
    it("doesn't display issues if there are none", () => {
      expect(repo.textContent).not.toContain("issues");
    });
    it("displays issues if the value is > 0", () => {
      component.unmount();
      repoData.open_issues_count = 2;
      render(<Repo data={repoData} />);
      const tempRepo = screen.queryByRole("listitem");

      expect(tempRepo.textContent).toContain("issues");
    });
  });
});
