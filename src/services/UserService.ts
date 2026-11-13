import type { userType } from "../types/userType";

const API_Vegpont = "http://127.0.0.1:8000/api/users";

export function getUsers() {
  return fetch(API_Vegpont).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    return response.json() as Promise<userType[]>;
  });
}
