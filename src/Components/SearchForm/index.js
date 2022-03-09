import React, { useState, useEffect } from "react";
import axios from "axios";
import { RepoList } from "..";

function SearchForm() {
  const [username, setUsername] = useState("");
  const [repoInfo, setRepoInfo] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {data} = await axios.get(`https://api.github.com/users/${username}/repos`)
    
    setRepoInfo(data)
  };
  
  useEffect(() => {
    handleSubmit()
  }, [username]);

  <RepoList props= {repoInfo}/>

  return (
    <form role="form" onSubmit={handleSubmit}>
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
  );
}

export default SearchForm;
