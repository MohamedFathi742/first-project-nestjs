import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { get } from 'http';
import { Product } from './interfaces/product.interface';
import { queryProductDto } from './dto/query-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  /*
  @Get()
  getAllProducts():Product[] {
    return this.productsService.findAll();
  }
*/
  @Get()
  findAll(@Query() query: queryProductDto): {success:boolean; message:string; data?:Product[] }{
    const {
      page = 1,
      limit = 10,
      search,
      category,
      minPrice,
      maxPrice,
      isActive,
      sortBy = 'createdAt',
      order = 'DESC',
    } = query;
    let filteredProducts = [...this.productsService.findAll()];

    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase() ,
      );
    }
    if (minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice,
      );
    }

    if (maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= maxPrice,
      );
    }

    if(search)
      {
const lowerSearch = search.toLowerCase();
filteredProducts = filteredProducts.filter(
product=>product.name.toLowerCase().includes(lowerSearch) ||
product.description.toLowerCase().includes(lowerSearch)||
product.category.toLowerCase().includes(lowerSearch)
);

}
filteredProducts.sort((a,b)=>{
let aValue = a[sortBy];
let bValue = b[sortBy];
if(sortBy==="createdAt")
{
aValue=new Date(aValue).getDate();
bValue=new Date(bValue).getDate();
}

if(order==="ASC")
{
return aValue>bValue?1:-1;
}
else
  {
return aValue<bValue?1:-1;

  }


})



  return 
  {
success:true,
messagge:'Products retrieved successfully',
data:filteredProducts,

  }
  }
}
