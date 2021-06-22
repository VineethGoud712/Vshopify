import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SproductComponent } from './sproduct/sproduct.component';

const routes: Routes = [
{path:'products',component:ProductsComponent},
{path:'product/:id',component:SproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
