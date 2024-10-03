import { create } from "zustand";
import { USER } from "../services/types";

interface dataUser extends USER {
  setDataUser: (data:USER) => void;
}

export const useDataUserStore = create<dataUser>((set) => ({
  name: null,
  lastName: null,
  birthDay: null,
  setDataUser: (data:USER) => set((state) => ({
    ...state,
    name: data.name,
    lastName: data.lastName,
    birthDay: data.birthDay
  }))
}))