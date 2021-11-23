import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemCategoryComponent} from './item-category/item-category.component';
import {ListCategoryComponent} from './list-category/list-category.component';
import {CategoryRoutingModule} from './category-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';


@NgModule({
  declarations: [
    ListCategoryComponent,
    ItemCategoryComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModalModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ]
})
export class CategoryModule {
}
