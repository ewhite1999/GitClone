import React from "react";
const Profile = (props) => {
  const { login, avatar_url, html_url, name } = props.data;
  return (
    <div className="flex space-x-5 p-5 ">
      {avatar_url && <img src={avatar_url} className="rounded-full w-16" alt="git avatar" />}
      <div>
        {name && <h2 className="font-bold text-2xl">{name}</h2>}
        <a className="text-xl" href={html_url} rel="noopener noreferrer" target='_blank'>
          {login}
        </a>
      </div>
    </div>
  );
};

export default Profile;
