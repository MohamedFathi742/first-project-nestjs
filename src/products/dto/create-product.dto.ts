export class CreateProductDto {
  id: string;
  name: string;
  price: number;
  description?: string;
  stock: number;
  category: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
