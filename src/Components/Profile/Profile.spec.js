/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Profile from ".";

describe("Repo component", () => {
  let userData;
  let component;
  beforeAll(() => {
    userData = {
      login: "ewhite1999",
      avatar_url: "https://avatars.githubusercontent.com/u/88836794?v=4",
      html_url: "https://github.com/ewhite1999",
      name: "Edward White",
    };
  });

  beforeEach(() => {
    component = render(<Profile data={userData} />);
  });

  describe("profile picture", () => {
    it("has one", () => {
      const img = screen.queryByRole("img");
      expect(img).toBeTruthy();
    });
    it("has the expected url", () => {
      const img = screen.queryByRole("img");
      expect(img.src).toBe(
        "https://avatars.githubusercontent.com/u/88836794?v=4"
      );
    });
  });
  describe("name", () => {
    it("shows their name if they have one", () => {
      const name = screen.queryByRole("heading");
      expect(name.textContent).toBe("Edward White");
    });
    it("does not have a name if the data is missing", () => {
      component.unmount();
      userData.name = null;
      render(<Profile data={userData} />);
      const name = screen.queryByRole("heading");
      expect(name).toBeFalsy;
    });
  });
  describe("username", () => {
    it("has one in the form of a link", () => {
      const username = screen.queryByRole("link");
      expect(username.textContent).toBe("ewhite1999");
    });
    it("links to their profile", () => {
      const username = screen.queryByRole("link");
      expect(username.href).toBe("https://github.com/ewhite1999");
    });
  });
});
