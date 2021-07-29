import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

//custom components
import { AllProductsComponent } from './pages/allProducts/allProducts.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
@NgModule({
  declarations: [
    AllProductsComponent,
    ItemCardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
