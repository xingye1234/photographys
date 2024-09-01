import { create } from "zustand";
import type { User } from "@/app/types/user";

interface UserState {
  user: User | {};
  setUserInfo: (user: User) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: JSON.parse(sessionStorage.getItem("user")!) || {},
  setUserInfo: (user: User) => {
    sessionStorage.setItem("user", JSON.stringify(user));
    return set({ user });
  },
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
}));
