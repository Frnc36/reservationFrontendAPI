import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { userType } from "../types/userType";
import { getUsers } from "../services/UserService";
import User from "../components/User";

interface UserContextType {
  userList: userType[];
  load: boolean;
  error: string | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userList, setUserList] = useState<userType[]>([]);
  const [load, setLoad] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUserList(data);
        setError(null);
      })
      .catch(() => {
        setError("Nem sikerült betölteni az adatokat!");
      })
      .finally(() => {
        setLoad(false);
      });
  }, []);

  return (
    <UserContext.Provider value={{ userList, load, error }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("Csak a productProvider-en belül használható");
  }
  return context;
}
