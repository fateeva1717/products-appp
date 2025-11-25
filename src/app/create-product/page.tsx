'use client';

import Link from 'next/link';
import CreateProductForm from '@/components/CreateProductForm';

export default function CreateProductPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <Link 
          href="/products"
          className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-6"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Products
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create New Product</h1>
          <p className="text-gray-600 mb-8">Fill in the details below to create a new product</p>
          
          <CreateProductForm />
        </div>
      </div>
    </div>
  );
}
