import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [tempUser, setTempUser] = useState();

  console.log(tempUser);
  useEffect(() => {
    setTempUser(user);
  }, [user]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      {isAuthenticated && (
        <div>
        </div>
      )}
    </div>
  );
};

export default Profile;
