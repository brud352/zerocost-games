
export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  releaseDate: string;
  rating: number;
  platforms: string[];
  downloadUrl?: string;
}

export interface CartItem extends Game {
  addedAt: number;
}
