import React from "react";

const Repo = (props) => {
  const {
    name,
    description,
    stargazers_count,
    language,
    forks_count,
    open_issues_count,
  } = props.data;
  return (
    <li>
      <div>
        <p>{name}</p>
        <p>{description}</p>
        <div>
          <span>{language}</span>
          {stargazers_count && <span>stargazers:{stargazers_count}</span>}
          {forks_count && <span>forks:{forks_count}</span>}
          {open_issues_count && <span>issues:{open_issues_count}</span>}
        </div>
      </div>
    </li>
  );
};

export default Repo;
