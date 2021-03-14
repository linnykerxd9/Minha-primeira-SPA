import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { FooterComponent } from './footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule} from '@angular/material/table';
import { TabelasComponent } from './tabelas/tabelas.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    Error404Component,
    FooterComponent,
    TabelasComponent
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    SharedModule,
    MatTableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
