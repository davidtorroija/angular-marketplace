import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

import { AllProductsComponent } from '../products/pages/allProducts/allProducts.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [AuthGuard],
    // children
    children: [
      {
        path: 'products',
        component: AllProductsComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/products',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
