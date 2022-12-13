import { CartsComponent } from './carts/components/carts/carts.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', component: AllProductsComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartsComponent },
  { path: '**', redirectTo: 'products', pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
