import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const children = [
    // DHS- here declare all the routes 
  /* {
    path: 'home',
    component: HomeComponent
  } */
];

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [AuthGuard],
    // children
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
