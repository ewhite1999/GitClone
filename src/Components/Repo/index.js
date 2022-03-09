import React from "react";

const Repo = (props) => {
  const {
    name,
    description,
    stargazers_count,
    language,
    forks_count,
    open_issues_count,
    html_url,
  } = props.data;
  return (
    <li>
      <div className=" border-b-2">
        <a href={html_url} rel="noopener noreferrer" target="_blank">
          {name}
        </a>
        <p>{description}</p>
        <div>
          <span>{language}</span>
          {stargazers_count > 0 && <span>stargazers:{stargazers_count}</span>}
          {forks_count > 0 && <span>forks:{forks_count}</span>}
          {open_issues_count > 0 && <span>issues:{open_issues_count}</span>}
        </div>
      </div>
    </li>
  );
};

export default Repo;
