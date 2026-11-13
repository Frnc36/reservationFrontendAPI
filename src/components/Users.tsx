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
      {userList.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </div>
  );
}

export default Users;
