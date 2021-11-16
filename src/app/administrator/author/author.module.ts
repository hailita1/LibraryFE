import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { ListAuthorComponent } from './list-author/list-author.component';
import { ItemAuthorComponent } from './item-author/item-author.component';


@NgModule({
  declarations: [ListAuthorComponent, ItemAuthorComponent],
  imports: [
    CommonModule,
    AuthorRoutingModule
  ]
})
export class AuthorModule { }
