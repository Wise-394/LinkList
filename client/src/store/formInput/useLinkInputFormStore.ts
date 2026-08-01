import { create } from "zustand";
import { Link } from "../../../../types/types";

type Photo = File | string | null;

interface LinkInputForm {
  profilePhoto: Photo;
  coverPhoto: Photo;
  name: string;
  username: string;
  description: string;
  linkItems: Link[];
  setProfilePhoto: (file: Photo) => void;
  setCoverPhoto: (file: Photo) => void;
  setName: (name: string) => void;
  setUsername: (username: string) => void;
  setDescription: (description: string) => void;
  addLink: (link: Link) => void;
  deleteLinkItem: (id: number) => void;
  initLinkInputForm: (data: {
    profilePhoto: Photo;
    coverPhoto: Photo;
    name: string;
    username: string;
    description: string;
    linkItems: Link[];
  }) => void;
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
  deleteLinkItem: (id) => {
    set((state) => ({
      linkItems: state.linkItems.filter((value) => value.id !== id),
    }));
  },
  initLinkInputForm: (data) => {
    set((state) => ({
      username: data.username,
      name: data.name,
      description: data.description,
      coverPhoto: data.coverPhoto,
      profilePhoto: data.profilePhoto,
      linkItems: data.linkItems,
    }));
  },
}));
