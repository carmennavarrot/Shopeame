import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-admid',
  standalone: true,
  imports: [ReactiveFormsModule, ProductComponent],
  templateUrl: './admid.component.html',
  styleUrl: './admid.component.css'
})
export class AdmidComponent {

formulario!: FormGroup
parametro!: Product

constructor(private formBuilder: FormBuilder,
  private productService: ProductService
){
  this.formulario = formBuilder.group({
"producto": new FormControl(null, [Validators.required ,]),
 "Precio": new FormControl(null, [Validators.required, Validators.nullValidator]),
 "Descripcion": new FormControl(null, []),
 "Imagen":new FormControl(null,[Validators.required]),
 "Opiniones":new FormControl(null, [Validators.nullValidator])

  })
  productService.getById(Number(this.parametro.id)).subscribe({
    next: (response)=>{
      this.parametro = response as Product
    },
    error: ()=>{}
  })
}

enviarFormulario() {
  console.log('enviando formulario...')
}

}





