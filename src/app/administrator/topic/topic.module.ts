import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicRoutingModule } from './topic-routing.module';
import { ListTopicComponent } from './list-topic/list-topic.component';
import { ItemTopicComponent } from './item-topic/item-topic.component';


@NgModule({
  declarations: [ListTopicComponent, ItemTopicComponent],
  imports: [
    CommonModule,
    TopicRoutingModule
  ]
})
export class TopicModule { }
