import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
products: Product[] = []

constructor(private productService: ProductService){
  productService.getAll().subscribe({
  next:(response)=>{
    this.products = response as Product[]
  },
  error:() =>{}
  })
}
}
