import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TopicRoutingModule } from './topic-routing.module';
import { ListTopicComponent } from './list-topic/list-topic.component';
import { ItemTopicComponent } from './item-topic/item-topic.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [ListTopicComponent, ItemTopicComponent],
  imports: [
    CommonModule,
    TopicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule
  ],
  entryComponents: [
    ItemTopicComponent
  ]
})
export class TopicModule { }
