import type { userType } from "../types/userType";

interface UsersProps {
  user: userType;
}

function User({ user }: UsersProps) {
  return (
    <div>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default User;
