import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Toolbar Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
// Boton Angular Material
import {MatButtonModule} from '@angular/material/button';
//SnackBar Material
import {MatSnackBarModule} from '@angular/material/snack-bar';
//Dialog Material
import {MatDialogModule} from '@angular/material/dialog'; 
//Input Material
import {MatInputModule} from '@angular/material/input'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule
  ],exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class MaterialModule { }
