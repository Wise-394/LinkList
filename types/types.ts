export interface User {
  id: string;
  username: string;
  name: string;
  bio: string;
  profileImageUrl: string;
  coverImageUrl: string;
  profileImageRaw?: File;
  coverImageRaw?: File;
}

export interface Link {
  id: number;
  userId: string;
  label: string;
  url: string;
  icon: string;
  order: number;
}

export interface UserInfo {
  user: User;
  LinkItems: Link[];
}

interface PageViews {
  id: number;
  userId: string;
  referrer: string;
  createdAt: Date;
}

interface LinkClick {
  id: number;
  linkId: number;
  createdAt: Date;
}
