import { create } from "zustand";
import { Link } from "../../../../types/types";

interface LinkInputForm {
  profilePhoto: File | null;
  coverPhoto: File | null;
  name: string;
  username: string;
  link: Link[];
  setProfilePhoto: (file: File | null) => void;
  setCoverPhoto: (file: File | null) => void;
}

export const useLinkInputFormStore = create<LinkInputForm>((set) => ({
  profilePhoto: null,
  coverPhoto: null,
  name: "",
  username: "",
  link: [],
  setProfilePhoto: (file) => set({ profilePhoto: file }),
  setCoverPhoto: (file) => set({ coverPhoto: file }),
}));
