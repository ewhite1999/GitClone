import React from "react";
import * as Components from "../../Components";
import { useState } from "react";
import axios from "axios";
import { RepoList } from "../../Components";

const RepoPage = () => {
  const [username, setUsername] = useState("");
  const [repoInfo, setRepoInfo] = useState([]);
  const [userData, setUserData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [repoData, userInfo] = await Promise.all([
      axios.get(`https://api.github.com/users/${username}/repos`),
      axios.get(`https://api.github.com/users/${username}`),
    ]);

    setRepoInfo(repoData.data);
    setUserData(userInfo.data);
    setUsername("");

    console.log("thus is the repoData", repoData);
    console.log("thus is the userInfo", userInfo);
  };
  //   useEffect(() => {

  //   }, [])

  return (
    <>
      <div className="flex justify-center items-center flex-wrap mx-4 h-16">
        <form className=" w-full max-w-sm" role="form" onSubmit={handleSubmit}>
          <div className="flex items-center border-b border-blue-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Github Username"
              aria-label="username"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
              value="Get Repos"
            />
          </div>
        </form>
      </div>
      <div className="sm:bg-[#0a0c10] min-h-screen">
        <div className="max-w-screen-xl md:flex md:items-start md:p-2 md:pt-5 xl:mx-auto">
          <Components.Profile data={userData}></Components.Profile>
          <RepoList data={repoInfo} />
        </div>
      </div>
    </>
  );
};

export default RepoPage;
