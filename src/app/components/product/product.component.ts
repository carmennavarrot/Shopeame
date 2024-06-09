import { Component, Input, input } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
@Input() product!: Product;

public get estrellasEnteras() : number[]{
  const estrellas = []
  for(let i= 0; i< Math.floor(this.product.stars); i++){
    estrellas.push(1)

  }
  return estrellas
}
}
