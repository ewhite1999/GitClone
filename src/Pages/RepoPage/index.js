import React from "react";
import * as Components from "../../Components";

const RepoPage = () => {
  const data = {
    login: "ewhite1999",
    id: 88836794,
    node_id: "MDQ6VXNlcjg4ODM2Nzk0",
    avatar_url: "https://avatars.githubusercontent.com/u/88836794?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/ewhite1999",
    html_url: "https://github.com/ewhite1999",
    followers_url: "https://api.github.com/users/ewhite1999/followers",
    following_url:
      "https://api.github.com/users/ewhite1999/following{/other_user}",
    gists_url: "https://api.github.com/users/ewhite1999/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/ewhite1999/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/ewhite1999/subscriptions",
    organizations_url: "https://api.github.com/users/ewhite1999/orgs",
    repos_url: "https://api.github.com/users/ewhite1999/repos",
    events_url: "https://api.github.com/users/ewhite1999/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/ewhite1999/received_events",
    type: "User",
    site_admin: false,
    name: "Edward White",
    company: null,
    blog: "",
    location: null,
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 24,
    public_gists: 0,
    followers: 2,
    following: 1,
    created_at: "2021-08-12T12:54:00Z",
    updated_at: "2022-01-31T08:45:37Z",
  };

  return (
    <>
      <Components.Profile data={data}></Components.Profile>
    </>
  );
};

export default RepoPage;
