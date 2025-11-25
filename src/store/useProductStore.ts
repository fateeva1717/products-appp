import { create } from 'zustand';
import { Product, CreateProductData } from '@/types/product';

interface ProductStore {
  products: Product[];
  likedProducts: Product[];
  searchQuery: string;
  currentPage: number;
  itemsPerPage: number;
  addProduct: (productData: CreateProductData) => void;
  toggleLike: (productId: number) => void;
  deleteProduct: (productId: number) => void;
  fetchProducts: () => Promise<void>;
  setSearchQuery: (query: string) => void;
  setCurrentPage: (page: number) => void;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  likedProducts: [],
  searchQuery: '',
  currentPage: 1,
  itemsPerPage: 8,

  fetchProducts: async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const products: Product[] = await response.json();
      
      const productsWithLikes = products.map(product => ({
        ...product,
        isLiked: false,
        body: product.body.length > 100 ? product.body.substring(0, 100) + '...' : product.body,
        imageUrl: `https://picsum.photos/300/200?random=${product.id}`
      }));
      
      set({ products: productsWithLikes });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },

  addProduct: (productData: CreateProductData) => {
    const newProduct: Product = {
      id: Date.now(),
      title: productData.title,
      body: `${productData.description} | Price: $${productData.price} | Category: ${productData.category}`,
      userId: 1,
      isLiked: false,
      imageUrl: 'https://picsum.photos/300/200?random=999'
    };
    
    set((state) => ({
      products: [newProduct, ...state.products],
    }));
  },

  toggleLike: (productId: number) => {
    set((state) => ({
      products: state.products.map(product =>
        product.id === productId
          ? { ...product, isLiked: !product.isLiked }
          : product
      ),
    }));
  },

  deleteProduct: (productId: number) => {
    set((state) => ({
      products: state.products.filter(product => product.id !== productId),
    }));
  },

  setSearchQuery: (query: string) => {
    set({ searchQuery: query, currentPage: 1 });
  },

  setCurrentPage: (page: number) => {
    set({ currentPage: page });
  },
}));
