import React from "react";
import Repo from "../Repo";
const RepoList = (props) => {
  const reposArr = props.data;
  console.log("this is the ReposArr", reposArr)
  return (
    <ul>
      {reposArr.map((r) => (
        <Repo key={r.id} data={r} />
      ))}
    </ul>
  );
};

export default RepoList;
