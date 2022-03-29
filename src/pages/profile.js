import React, { useContext, useState } from "react";

import AuthContext from "src/context/AuthContext";
import Male from "../components/images/male.jpg";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const [picture, setPicture] = useState(Male);

  const handleChange = (e) => {
    setPicture(e.target.files[0]);
  };
  const handleClick = () => {};

  if (!user) return null;

  return (
    <div>
      <p>{user.uid}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <button onClick={logout}>Logout</button>
      <div className="flex items-center gap-4 py-4">
        <input type="file" onChange={handleChange} />
        <button onClick={handleClick}>Upload</button>
        <img className="h-12 w-12 rounded-full" alt="Avatar " src={picture} />
      </div>
    </div>
  );
};

export default Profile;
