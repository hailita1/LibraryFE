import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../../helper/auth-guard';
import {ListPublishingCompanyComponent} from './list-publishing-company/list-publishing-company.component';


const routes: Routes = [{
  path: '',
  canActivate: [AuthGuard],
  component: ListPublishingCompanyComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishingCompanyRoutingModule { }
