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
    <li className="sm:bg-slate-900">
      <div className=" border-b mx-4 py-6 space-y-2 ">
        <a
          className=" text-blue-300 font-bold text-xl"
          href={html_url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {name}
        </a>
        <p className=" text-sm">{description}</p>
        <div className="flex text-xs space-x-5">
          <span>{language}</span>
          {stargazers_count > 0 && <span>stargazers: {stargazers_count}</span>}
          {forks_count > 0 && <span>forks: {forks_count}</span>}
          {open_issues_count > 0 && <span>issues: {open_issues_count}</span>}
        </div>
      </div>
    </li>
  );
};

export default Repo;
