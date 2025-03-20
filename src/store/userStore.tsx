import { create } from "zustand";
import { IUser } from "../types/user";

interface UserState {
  user: IUser;
  setUser: (user: IUser) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => {
  const storedUser = localStorage.getItem("user");

  const initialUser: IUser = storedUser ? JSON.parse(storedUser) : { name: "" };

  return {
    user: initialUser,
    setUser: (user) => {
      set({ user });
      localStorage.setItem("user", JSON.stringify(user));
    },
    clearUser: () => {
      set({ user: { name: "" } });
      localStorage.removeItem("user");
    },
  };
});
