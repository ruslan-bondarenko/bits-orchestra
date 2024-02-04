export type IProduct = {
  id: string;
  name: string;
  brand: string;
  price: number;
  currency: string;
  imgUrl?: string;
  isAvailable?: boolean;
  tag?: string;
  description: string
};
