import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule
  ],
  exports:[
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
