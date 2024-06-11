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

constructor(private formBuilder: FormBuilder,
  private productService: ProductService,
  private route: ActivatedRoute
  // route activatedroute me permite utilizar 
){
  this.formulario = formBuilder.group({
"producto": new FormControl(null, [Validators.required ,]),
 "Precio": new FormControl(null, [Validators.required, /*Validators.pattern*/]),
 "Descripcion": new FormControl(null, []),
 "Imagen":new FormControl(null,[Validators.required]),
 "Opiniones":new FormControl(null, [/*Validators.pattern*/])

  })
   route.paramMap.subscribe(params=>{
    this.parametro =params.get('id');
   });

   if(this.parametro === "nuevo"){

   }else{
    productService.getById(Number(this.parametro)).subscribe({
      next: (response)=>{
        this.product = response as Product
      },
      error: ()=>{}
    })
   }

}

enviarFormulario() {
  console.log('enviando formulario...')
}

}





