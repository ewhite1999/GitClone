import React from "react";
import * as Components from "../../Components";
import { useEffect, useState } from "react";
import axios from "axios";
import { RepoList } from "../../Components";

const RepoPage = () => {

  const [username, setUsername] = useState("");
  const [repoInfo, setRepoInfo] = useState([]);
  const [userData, setUserData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [repoData, userInfo] = await Promise.all ([
        axios.get(`https://api.github.com/users/${username}/repos`), 
        axios.get(`https://api.github.com/users/${username}`)
    ])
    
    setRepoInfo(repoData.data)
    setUserData(userInfo.data)
    setUsername('')

    console.log("thus is the repoData" , repoData)
    console.log("thus is the userInfo" , userInfo)
  };
  
    

  return (
    <>
        <form role="form" onSubmit={ handleSubmit}>
            <input
                type="text"
                placeholder="Github Username"
                aria-label="username"
                value = {username}
                required
                onChange={(e)=> setUsername(e.target.value)}
                />
            <input type="submit" value="Get Repos" />
        </form>
      <Components.Profile data={userData}></Components.Profile>
      <RepoList data={repoInfo}/>
    </>
  );
};

export default RepoPage;
