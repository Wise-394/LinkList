import { create } from "zustand";
interface LinkInputForm {
  profilePhoto: string;
  coverPhoto: string;
  name: string;
  username: string;
  link: [];
}

export const useLinkInputFormStore = create<LinkInputForm>((set) => ({
  profilePhoto: "",
  coverPhoto: "",
  name: "",
  username: "",
  link: [],
}));
