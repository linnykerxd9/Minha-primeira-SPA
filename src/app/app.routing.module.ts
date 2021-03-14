import { TabelasComponent } from './components/tabelas/tabelas.component';
import { Error404Component } from './components/error404/error404.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo : 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'tabela', component: TabelasComponent
  },
  {
    path: '**', component: Error404Component
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }

