import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublishingCompanyRoutingModule} from './publishing-company-routing.module';
import {ListPublishingCompanyComponent} from './list-publishing-company/list-publishing-company.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ItemPublishingCompanyComponent} from './item-publishing-company/item-publishing-company.component';


@NgModule({
  declarations: [
    ListPublishingCompanyComponent,
    ItemPublishingCompanyComponent],
  imports: [
    CommonModule,
    PublishingCompanyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PublishingCompanyModule {
}
