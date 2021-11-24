import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReaderRoutingModule} from './reader-routing.module';
import {ListReaderComponent} from './list-reader/list-reader.component';
import {ItemReaderComponent} from './item-reader/item-reader.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ListReaderComponent,
    ItemReaderComponent],
  imports: [
    CommonModule,
    ReaderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReaderModule {
}
