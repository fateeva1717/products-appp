'use client';

import { Product } from '@/types/product';
import { useRouter } from 'next/navigation';
import { useProductStore } from '@/store/useProductStore';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const { toggleLike, deleteProduct } = useProductStore();

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    router.push(`/products/${product.id}`);
  };

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleLike(product.id);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteProduct(product.id);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleCardClick}
    >
      {/* Картинка */}
      <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Заголовок */}
      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
      
      {/* Описание */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.body}</p>
      
      {/* Кнопки */}
      <div className="flex justify-between items-center">
        <button
          onClick={handleLikeClick}
          className={`p-2 rounded-full transition-colors ${
            product.isLiked 
              ? 'text-red-500 hover:text-red-600' 
              : 'text-gray-400 hover:text-red-500'
          }`}
        >
          <svg className="w-6 h-6" fill={product.isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        
        <button
          onClick={handleDeleteClick}
          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}
