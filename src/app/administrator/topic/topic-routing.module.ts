import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../../helper/auth-guard';
import {ListTopicComponent} from './list-topic/list-topic.component';


const routes: Routes = [
  {
    path: '',
    component: ListTopicComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicRoutingModule { }
