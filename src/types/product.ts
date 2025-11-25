export interface Product {
  id: number;
  title: string;
  body: string;
  userId: number;
  isLiked: boolean;
  imageUrl?: string;
}

export interface CreateProductData {
  title: string;
  description: string;
  price: string;
  category: string;
}
