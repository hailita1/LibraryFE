import {Component, OnInit, ViewChild} from '@angular/core';
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
import {DocumentService} from 'src/app/service/document/document.service';
import {environment} from 'src/environments/environment';
import {PDFDocumentProxy} from 'ng2-pdf-viewer';
import {TopicService} from '../../service/topic/topic.service';

declare var $: any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  // @ts-ignore
  @ViewChild(QuickviewComponent) view!: QuickviewComponent;
  listTopic: any[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl(''),
  });
  currentDocument: any;
  sub: Subscription;
  relatedHouses: House[] = [];
  currentUser: UserToken;
  listReview: Bill[] = [];
  listReview1: Bill[] = [];
  starAverage = 0;
  imageObject: Array<object> = [];
  id: any;
  pageVariable = 1;
  listTopics: any[] = [];
  page = 1;
  pageSize = 10;
  listService: Service[] = [];
  link: string;
  hasRoleUser = false;
  hasRoleAdmin = false;
  fileUrl = environment.apiUrl;
  documentDetail: any;
  src;
  pageDocument = 1;
  pageSizeDocument = 10;
  totalPages;

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private documentService: DocumentService,
    private authenticationService: AuthenticationService,
    private topicService: TopicService,
    private router: Router
  ) {
    this.sub = this.activatedRoute.paramMap.subscribe(
      async (paramMap: ParamMap) => {
        this.id = +paramMap.get('id');
        this.currentDocument = await this.getDocument(this.id);
        this.getDetailDocument(this.id);
      }
    );
    this.authenticationService.currentUser.subscribe((value) => {
      this.currentUser = value;
      if (this.currentUser) {
        const roleList = this.currentUser.roles;
        for (const role of roleList) {
          if (role.authority === 'ROLE_USER') {
            this.hasRoleUser = true;
          }
          if (role.authority === 'ROLE_ADMIN') {
            this.hasRoleAdmin = true;
          }
        }
      }
    });
  }

  ngOnInit() {
    this.getAllTopic();
  }

  getDetailDocument(id: any) {
    this.documentService.get(id).subscribe((res) => {
      if (res !== null && res !== undefined) {
        this.getDocumentByCategory(res.category.id);
        this.documentDetail = res;
        this.src = this.fileUrl + '/files/' + this.documentDetail.fileName;
      }
    });
  }

  initModal(model: any): void {
    this.view.view(model);
  }

  afterLoadComplete(pdf: PDFDocumentProxy) {
    this.totalPages = pdf.numPages;
  }

  getDocumentByCategory(id: any) {
    this.documentService.findCategories(id).subscribe((res) => {
      this.listTopics = res;
      if (this.listTopics.length > 0) {
        this.listTopics = this.listTopics.filter(
          (x) => x.id !== this.id
        );
      }
    });
  }

  getDocument(id: number) {
    return this.documentService.get(id).toPromise();
  }

  getAllTopic() {
    this.topicService.getAllTopic().subscribe(listTopic => {
      this.listTopic = listTopic;
    });
  }

  search() {
    const name = this.searchForm.value.name;
    this.router.navigate(['../document'], {queryParams: {name}});
  }
}
