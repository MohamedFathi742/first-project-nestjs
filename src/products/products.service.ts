import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {

private products:Product[] = [
{

id: '1',
  name: 'Product 1',
  price: 100,
  description: 'Description for Product 1',
  stock: 10,
  category: 'Category A',
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),


},
{

id: '2',
  name: 'Product 2',
  price: 100,
  description: 'Description for Product 2',
  stock: 10,
  category: 'Category b',
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),


},

findAll(): Product[] {

    return this.products;
  }


];










}
