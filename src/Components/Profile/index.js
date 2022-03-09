import React from "react";
const Profile = (props) => {
  const { login, avatar_url, html_url, name } = props.data;
  return (
    <div>
      <img src={avatar_url} />
      {name && <h2>{name}</h2>}
      <a href={html_url}>{login}</a>
    </div>
  );
};

export default Profile;
