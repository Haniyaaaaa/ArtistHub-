export interface Artist {
  id: number;
  name: string;
  profession: string;
  intro: string;
  images: string[];
  fullDescription: string;
}

export interface User {
  name: string;
  email: string;
  role: 'creator' | 'hiring';
  profession: string;
}