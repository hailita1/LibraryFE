import {Component, OnInit, ViewChild} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {UserToken} from '../../model/user-token';
import {AuthenticationService} from '../../service/auth/authentication.service';
import {QuickviewComponent} from '../homepage/quickview/quickview.component';
import {DocumentService} from 'src/app/service/document/document.service';
import {environment} from 'src/environments/environment';
import {TopicService} from "../../service/topic/topic.service";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  // @ts-ignore
  @ViewChild(QuickviewComponent) view!: QuickviewComponent;
  listTopic: any[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  });
  searchFormAdvanced: FormGroup = new FormGroup({
    address: new FormControl(''),
    numberRoom: new FormControl(''),
    upperBound: new FormControl(''),
    lowerBound: new FormControl(''),
  });
  sub: Subscription;
  query: string = '';
  currentUser: UserToken;
  listDocument = [];
  page = 1;
  pageSize = 9;
  isSelected = true;
  checkSerch = false;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private documentService: DocumentService,
              private authenticationService: AuthenticationService,
              private topicService: TopicService,
              private router: Router) {
    this.sub = this.activatedRoute.queryParams.subscribe(params => {
      this.query = params.name;
      if (this.query != null) {
        this.searchForm.value.name = this.query;
        this.search();
      } else {
        // this.getAllDocument();
      }
    });
    this.authenticationService.currentUser.subscribe(value => {
      this.currentUser = value;
    });
  }

  viewDetail(id: any) {
    this.router.navigateByUrl("/document/" + id);
  }

  fileUrl = environment.apiUrl;

  getAllDocument() {
    this.documentService.getAll().subscribe(res => {
      this.listDocument = res;
    });
  }

  ngOnInit() {
    this.getAllDocument();
    this.getAllTopic();
    $(document).ready(function () {
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
      $('.hero__categories__all').on('click', function () {
        $('.hero__categories ul').slideToggle(400);
      });
      var rangeSlider = $('.price-range'),
        minamount = $('#minamount'),
        maxamount = $('#maxamount'),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
      rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event, ui) {
          minamount.val('$' + ui.values[0]);
          maxamount.val('$' + ui.values[1]);
        }
      });
      minamount.val('$' + rangeSlider.slider('values', 0));
      maxamount.val('$' + rangeSlider.slider('values', 1));
    });
  }

  getAllTopic() {
    this.topicService.getAllTopic().subscribe(listTopic => {
      this.listTopic = listTopic;
    });
  }

  search() {
    this.checkSerch = true;
    const name = this.searchForm.value.name;
    if (name != null) {
      if (name == '') {
        this.router.navigate(['/document']);
      } else {
        console.log(name);
        this.documentService.getAllDocumentByName(name).subscribe(listDocument => {
          this.listDocument = listDocument;
          this.router.navigate(['/document'], {queryParams: {name: name}});
        });
      }
    }
  }

  // changeStatus(event: any) {
  //   // tslint:disable-next-line: radix
  //   switch (parseInt(event)) {
  //     case -1:
  //       this.houseService.getAllHouseStatusTrue().subscribe(listHouse => {
  //         this.listHouse = listHouse;
  //       });
  //       break;
  //     case 1:
  //       this.houseService.getAllHousePriceAsc().subscribe(listHouse => {
  //         this.listHouse = listHouse;
  //       });
  //       break;
  //     case 0:
  //       this.houseService.getAllHousePriceDesc().subscribe(listHouse => {
  //         this.listHouse = listHouse;
  //       });
  //       break;
  //     default:
  //       break;
  //   }
  // }
}
