import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import DisplayBookComponent from './display-book/display-book.component';

export const routes: Routes = [
    {
    path: 'books/:bookId',
    component: DisplayBookComponent,
    },
   ];
