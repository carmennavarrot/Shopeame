import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ProductComponent } from '../../components/product/product.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admid',
  standalone: true,
  imports: [ReactiveFormsModule, ProductComponent],
  templateUrl: './admid.component.html',
  styleUrl: './admid.component.css'
})
export class AdmidComponent {

product: Product | null = null;
formulario!: FormGroup;
parametro: string | null = "";


constructor(private builder: FormBuilder,
  private productService: ProductService,
  private route: ActivatedRoute
  // route activatedroute me permite utilizar 
){
   route.paramMap.subscribe(params=>{
    this.parametro =params.get('id');
   });

   if(this.parametro === "nuevo"){
    this.product = {
      description: "",
      price: 0,
      id: 0,
      image: "",
      name: "",
      stars: 0,
    }
    this.construirFormulario(builder)

   }else{
    productService.getById(Number(this.parametro)).subscribe({
      next: (response)=>{
        this.product = response as Product
        this.construirFormulario(builder)
      },
      error: ()=>{}
    })
   }

}
construirFormulario(builder: FormBuilder){
  if(this.product){
    this.formulario = builder.group({
      "producto": new FormControl(this.product.name, []) , 
      "Precio": new FormControl(this.product.price, []), 
      "Descrip":new FormControl(this.product.description, []) , 
      "Imagen": new FormControl(this.product.image, []), 
       "Opiniones": new FormControl(this.product.stars, [Validators.max(5), Validators.min(0)]), 
    })
  }
  
}
enviarFormulario() {
  console.log('enviando formulario...')
}

onCambioValoracion(){
 const stars = Number( this.formulario.value.review)
 if(this.product){
  this.product.stars = stars
 }
}
onCambioPrecio(){
  const price = Number( this.formulario.value.price)
  if(this.product){
   this.product.price = price
  }
}
onCambioImagen(){
  const img =  this.formulario.value.image
  if(this.product){
   this.product.image = img
  }
}
onCambioDescrip(){
  const descip = this.formulario.value.description
  if(this.product){
    this.product.description = descip
  }
}
onCambioProduct(){
  const prod = this.formulario.value.name
  if(this.product){
    this.product.name = prod
  }
}

}





