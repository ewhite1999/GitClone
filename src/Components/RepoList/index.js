import React from "react";
import Repo from "../Repo";
const RepoList = (props) => {
  const reposArr = props.data;
  return (
    <ul className="md:flex-auto">
      {reposArr.map((r) => (
        <Repo key={r.id} data={r} />
      ))}
    </ul>
  );
};

export default RepoList;
