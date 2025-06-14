import { Category } from '../category/category.model';

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: Category;
  slug: string;
}
