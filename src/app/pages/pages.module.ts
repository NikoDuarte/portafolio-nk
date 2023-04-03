import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    TecnologiasComponent,
    
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    NgxTypedJsModule
  ]
})
export class PagesModule { }
