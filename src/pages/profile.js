import React, { useContext } from "react";

import AuthContext from "src/context/AuthContext";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) return null;

  return (
    <div>
      <p>{user.uid}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
