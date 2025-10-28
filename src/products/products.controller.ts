import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { get } from 'http';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  getAllProducts():Product[] {
    return this.productsService.findAll();
  }
}
