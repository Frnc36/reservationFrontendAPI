import React from "react";
import { useUserContext } from "../contexts/UserContext";
import User from "./User";

function Users() {
  const { userList, load, error } = useUserContext();

  if (load) {
    return <p>User betöltése...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {userList.map((user, i) => {
        return <User user={user} key={i} />;
      })}
    </div>
  );
}

export default Users;
