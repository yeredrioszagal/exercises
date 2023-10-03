import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CambioLetrasPipe } from './pipes/cambio-letras.pipe';



@NgModule({
  declarations: [
    CambioLetrasPipe
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [AngularMaterialModule, ReactiveFormsModule, HttpClientModule, CambioLetrasPipe ],
  providers: []
})
export class SharedModule { }
