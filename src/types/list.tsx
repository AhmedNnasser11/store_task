// interfaces/article.type.ts

export interface ArticleType {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
}
// interfaces/rating.type.ts

export interface RatingType {
  rate: number;
  count: number;
}

export interface ProductType {
  id: number | string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
  quantity?: number;
}
