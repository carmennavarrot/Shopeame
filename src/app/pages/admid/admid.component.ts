import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-admid',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admid.component.html',
  styleUrl: './admid.component.css'
})
export class AdmidComponent {
formulario!: FormGroup

constructor(private formBuilder: FormBuilder){
  this.formulario = formBuilder.group({
"producto": new FormControl(null, [Validators.required ,]),
 "Precio": new FormControl(null, [Validators.required, Validators.nullValidator]),
 "Descripcion": new FormControl(null, []),
 "Imagen":new FormControl(null,[Validators.required]),
 "Opiniones":new FormControl(null, [Validators.nullValidator])

  })
}
enviarFormulario(){
  console.log('enviando formulario...')
}
}
