import {Component, OnInit, ViewChild} from '@angular/core';
import {Category} from '../../model/category';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category/category.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AuthenticationService} from '../../service/auth/authentication.service';
import {UserToken} from '../../model/user-token';
import {House} from '../../model/house';
import {Bill} from '../../model/bill';
import {QuickviewComponent} from '../homepage/quickview/quickview.component';
import {Service} from '../../model/service';
import { DocumentService } from 'src/app/service/document/document.service';
import { environment } from 'src/environments/environment';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';

declare var $: any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  // @ts-ignore
  @ViewChild(QuickviewComponent) view!: QuickviewComponent;
  listCategory: Category[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  });
  currentHouse: House;
  sub: Subscription;
  relatedHouses: House[] = [];
  currentUser: UserToken;
  listReview: Bill[] = [];
  listReview1: Bill[] = [];
  starAverage: number = 0;
  imageObject: Array<object> = [];
  id: any;
  pageVariable = 1;
  page = 1;
  pageSize = 10;
  listService: Service[] = [];
  link: string;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private documentService: DocumentService,
              private authenticationService: AuthenticationService,
              private router: Router) {
    this.sub = this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getDetailDocument(this.id);
    });
    this.activatedRoute.params.subscribe(res => {
      this.link = '/house/' + res.id;
      localStorage.setItem('link', JSON.stringify(this.link));
    });
    this.authenticationService.currentUser.subscribe(value => {
      this.currentUser = value;
    });
  }
  ngOnInit() {
    $(document).ready(function() {
      $('.product__details__pic__slider').owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
      });
      $('.product__details__pic__slider img').on('click', function() {
        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product__details__pic__item--large').attr('src');
        if (imgurl != bigImg) {
          $('.product__details__pic__item--large').attr({
            src: imgurl
          });
        }
      });
      var proQty = $('.pro-qty');
      proQty.prepend('<span class="dec qtybtn">-</span>');
      proQty.append('<span class="inc qtybtn">+</span>');
      proQty.on('click', '.qtybtn', function() {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
          var newVal = parseFloat(oldValue) + 1;
        } else {
          // Don't allow decrementing below zero
          if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
          } else {
            newVal = 0;
          }
        }
        $button.parent().find('input').val(newVal);
      });
    });
    // this.getAllCategories();
  }
  fileUrl = environment.apiUrl;
  documentDetail:any;
  src;
  getDetailDocument(id:any){
    this.documentService.get(id).subscribe(res => {
      this.documentDetail = res;
      this.src = this.fileUrl + '/files/' + this.documentDetail.fileName;
    });
  }
  initModal(model: any): void {
    this.view.view(model);
  }
  totalPages;
  afterLoadComplete(pdf: PDFDocumentProxy) { this.totalPages = pdf.numPages;
  }
  // getAllCategories() {
  //   this.categoryService.getAllCategoryStatusTrue().subscribe(listCategory => {
  //     this.listCategory = listCategory;
  //   });
  // }

  // getAllHouseRelated(category: Category) {
  //   this.categoryService.getHouseByCategory(category.id).subscribe(listHouse => {
  //     listHouse.map((item, index) => {
  //       if (item.id === this.id) {
  //         listHouse.splice(index, 1);
  //       }
  //     });
  //     if (listHouse.length > 4) {
  //       for (let i = 0; i < 4; i++) {
  //         this.relatedHouses.push(listHouse[i]);
  //       }
  //     } else {
  //       this.relatedHouses = listHouse;
  //     }
  //   });
  // }

  search() {
    const address = this.searchForm.value.name;
    this.router.navigate(['../houses'], {queryParams: {address: address}});
  }
}
