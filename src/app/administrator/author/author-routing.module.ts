import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../../helper/auth-guard';
import {ListAuthorComponent} from './list-author/list-author.component';



const routes: Routes = [
  {
    path: '',
    component: ListAuthorComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
