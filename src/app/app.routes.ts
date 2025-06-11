import { Component } from '@angular/core';
import { ListComponent } from './domains/products/pages/list/list.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },{
    path:'about',
    component:AboutComponent
  }
];
