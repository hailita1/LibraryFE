import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReaderRoutingModule } from './reader-routing.module';
import { ListReaderComponent } from './list-reader/list-reader.component';
import { ItemReaderComponent } from './item-reader/item-reader.component';


@NgModule({
  declarations: [
    ListReaderComponent,
    ItemReaderComponent],
  imports: [
    CommonModule,
    ReaderRoutingModule
  ]
})
export class ReaderModule { }
