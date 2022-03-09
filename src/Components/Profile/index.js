import React from "react";
const Profile = (props) => {
  const { login, avatar_url, html_url, name } = props.data;
  return (
    <div className="flex space-x-5 p-5 ">
      <img src={avatar_url} className="rounded-full w-16" />
      <div>
        {name && <h2 className="font-bold text-2xl">{name}</h2>}
        <a className="text-xl" href={html_url}>
          {login}
        </a>
      </div>
    </div>
  );
};

export default Profile;
