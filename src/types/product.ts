export interface Product {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  console:
    | 'PlayStation 5'
    | 'Xbox Series X/S'
    | 'Nintendo Switch'
    | 'PC'
    | 'PlayStation 4'
    | 'Xbox One';
  releaseYear: number;
  condition: 'Novo' | 'Usado';
  rating: number;
  reviews: number;
  inStock: boolean;
  slug: string;
}

export type ProductListResponse = {
  products: Product[];
  total: number;
};

export type ProductDetailResponse = {
  product: Product | null;
};
