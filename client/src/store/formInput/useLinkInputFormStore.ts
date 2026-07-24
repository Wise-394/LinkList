import { create } from "zustand";
import { Link } from "../../../../types/types";

interface LinkInputForm {
  profilePhoto: File | null;
  coverPhoto: File | null;
  name: string;
  username: string;
  description: string;
  linkItems: Link[];
  setProfilePhoto: (file: File | null) => void;
  setCoverPhoto: (file: File | null) => void;
  setName: (name: string) => void;
  setUsername: (username: string) => void;
  setDescription: (description: string) => void;
  addLink: (link: Link) => void;
}

export const useLinkInputFormStore = create<LinkInputForm>((set) => ({
  profilePhoto: null,
  coverPhoto: null,
  name: "",
  username: "",
  description: "",
  linkItems: [],
  setProfilePhoto: (file) => set({ profilePhoto: file }),
  setCoverPhoto: (file) => set({ coverPhoto: file }),
  setName: (name) => set({ name }),
  setUsername: (username) => set({ username }),
  setDescription: (description) => set({ description }),
  addLink: (link) =>
    set((state) => ({ linkItems: [...state.linkItems, link] })),
}));
