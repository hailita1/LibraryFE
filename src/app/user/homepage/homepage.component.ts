import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../service/auth/authentication.service';
import {UserToken} from '../../model/user-token';
import {House} from '../../model/house';
import {QuickviewComponent} from './quickview/quickview.component';
import {TopicService} from 'src/app/service/topic/topic.service';
import {DocumentService} from '../../service/document/document.service';
import {environment} from '../../../environments/environment';

declare var $: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  // @ts-ignore
  @ViewChild(QuickviewComponent) view!: QuickviewComponent;
  listHouseFilter: any[] = [];
  listTopic: any[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  });
  listFilterResult: any[] = [];
  listDocumentLatest: any[] = [];
  listDocumentVisitNumber: any[] = [];
  currentUser: UserToken;
  searchKeyWord: any;
  conditsion: boolean;
  isCheck = true;
  fileUrl = environment.apiUrl;

  constructor(private categoryService: CategoryService,
              private documentService: DocumentService,
              private authenticationService: AuthenticationService,
              private topicService: TopicService,
              private router: Router) {
    this.authenticationService.currentUser.subscribe(value => {
      this.currentUser = value;
    });
  }

  ngOnInit() {
    this.getAllCategories();
    this.getAllDocument();
    this.getAllDocumentVisitNumber();
    // tslint:disable-next-line:only-arrow-functions
    $(document).ready(function() {
      $('.latest-product__slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ['<span class=\'fa fa-angle-left\'><span/>', '<span class=\'fa fa-angle-right\'><span/>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
      });
      // tslint:disable-next-line:only-arrow-functions
      $('.hero__categories__all').on('click', function() {
        $('.hero__categories ul').slideToggle(400);
      });
      $('.categories__slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ['<span class=\'fa fa-angle-left\'><span/>', '<span class=\'fa fa-angle-right\'><span/>'],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

          0: {
            items: 1,
          },

          480: {
            items: 2,
          },

          768: {
            items: 3,
          },

          992: {
            items: 4,
          }
        }
      });
    });
  }

  getAllCategories() {
    this.topicService.getAllTopic().subscribe(listTopic => {
      this.listTopic = listTopic;
    });
  }

  initModal(model: any): void {
    this.view.view(model);
  }

  search() {
    const name = this.searchForm.value.name;
    this.router.navigate(['../document'], {queryParams: {name}});
  }

  filterKeyWord() {
    var filterResult = [];
    this.conditsion = true;
    this.isCheck = false;
    if (this.searchKeyWord.length === 0) {
      this.isCheck = true;
    } else {
      this.listFilterResult = this.listHouseFilter;
      var keyWord = this.searchKeyWord.toLowerCase();
      this.listFilterResult.map(item => {
        var name = item.name.toLowerCase();
        if (name.includes(keyWord)) {
          filterResult.push(item);
        }
      });
    }
    this.listFilterResult = filterResult;
    if (this.listFilterResult.length !== 0) {
      this.conditsion = true;
    } else {
      this.conditsion = false;
    }
  }

  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 1000);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

  getAllDocument() {
    this.documentService.getAll().subscribe(list => {
      this.listHouseFilter = list;
      if (list.length > 6) {
        for (let i = 0; i < 6; i++) {
          this.listDocumentLatest.push(list[i]);
        }
      } else {
        this.listDocumentLatest = list;
      }
    });
  }

  getAllDocumentVisitNumber() {
    this.documentService.getAllByVisitNumber().subscribe(list => {
      if (list.length > 6) {
        for (let i = 0; i < 6; i++) {
          this.listDocumentVisitNumber.push(list[i]);
        }
      } else {
        this.listDocumentVisitNumber = list;
      }
    });
  }
}
