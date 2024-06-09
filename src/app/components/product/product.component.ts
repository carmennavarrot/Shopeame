import { Component, Input, input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
@Input() product!: Product;
products: any;

public get estrellasEnteras() : number[]{
  const estrellas = []
  for(let i= 0; i< Math.floor(this.product.stars); i++){
    estrellas.push(1)

  }
  return estrellas
}
}
