interface User {
  id: string;
  username: string;
  name: string;
  bio: string;
  photoUrl: string;
  coverPhotoUrl: string;
}

export interface Link {
  id: number;
  userId: string;
  label: string;
  url: string;
  icon: string;
  order: number;
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
