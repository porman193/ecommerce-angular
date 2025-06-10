import { Component } from '@angular/core';
import { ListComponent } from './domains/products/pages/list/list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  }
];
