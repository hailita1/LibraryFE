import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../../helper/auth-guard';
import {ListReaderComponent} from './list-reader/list-reader.component';


const routes: Routes = [{
  path: '',
  canActivate: [AuthGuard],
  component: ListReaderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReaderRoutingModule { }
