import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AdmidComponent } from './pages/admid/admid.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "productos",
        component: ProductsComponent
    },
    // {
    //     path: "gestion",
    //     component: AdmidComponent
    // },esto seria una opcion pero le hemos puesto en gestion/nuevo para ahorrarnos esta ruta y solo tener la ruta de id
    {
        path: "gestion/:id",
        component: AdmidComponent
    },
   
];
