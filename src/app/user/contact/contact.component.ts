import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {TopicService} from "../../service/topic/topic.service";

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  listTopic: any[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  });
  messageForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private topicService: TopicService,
              private router: Router) {
  }

  ngOnInit() {
    $('.hero__categories__all').on('click', function() {
      $('.hero__categories ul').slideToggle(400);
    });
    this.getAllTopic();
  }

  getAllTopic() {
    this.topicService.getAllTopic().subscribe(listTopic => {
      this.listTopic = listTopic;
    });
  }

  search() {
    const name = this.searchForm.value.name;
    this.router.navigate(['../document'], {queryParams: {name: name}});
  }
}
