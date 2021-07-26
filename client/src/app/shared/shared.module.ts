import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedRoutingModule],
  exports: [FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatCardModule]
})
export class SharedModule {}
