import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CategoryService} from '../../../service/category/category.service';
import {TopicService} from 'src/app/service/topic/topic.service';
import {UploadService} from 'src/app/service/upload/upload.service';
import {environment} from 'src/environments/environment';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.scss']
})
export class ItemCategoryComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private modalService: NgbModal, private fb: FormBuilder, private categoryService: CategoryService, private topic: TopicService, private uploadSevice: UploadService) {
  }

  @ViewChild('content', {static: false}) public childModal!: ModalDirective;
  @Input() listcategorys: Array<any>;
  @Output() eventEmit: EventEmitter<any> = new EventEmitter<any>();
  closeResult: string;
  checkButton = false;
  modalReference!: any;
  isAdd = false;
  isEdit = false;
  isInfo = false;
  title = '';
  type: any;
  status;
  imageName = '';
  apiUrl = environment.apiUrl;
  apiFileUrl = environment.apiUploadUrl;
  model: any;
  submitted = false;
  arrCheck = [];
  formGroup: FormGroup;
  formName = 'thể loại';
  listTopic: any[] = [];

  updateFormType(type: any) {
    switch (type) {
      case 'add':
        this.isInfo = false;
        this.isEdit = false;
        this.isAdd = true;
        this.title = `Thêm mới thông tin ${this.formName}`;
        break;
      case 'show':
        this.isInfo = true;
        this.isEdit = false;
        this.isAdd = false;
        this.title = `Xem chi tiết thông tin ${this.formName}`;
        break;
      case 'edit':
        this.isInfo = false;
        this.isEdit = true;
        this.isAdd = false;
        this.title = `Cập nhật thông tin ${this.formName}`;
        break;
      default:
        this.isInfo = false;
        this.isEdit = false;
        this.isAdd = true;
        break;
    }
  }

  ngOnInit(): void {
    this.submitted = false;
    this.fetchListTopic();
  }

  fetchListTopic() {
    this.topic.getAllTopic().subscribe(res => {
      this.listTopic = res;

    });
  }

  view(model: any, type = null): void {
    this.arrCheck = this.listcategorys;
    this.open(this.childModal);
    this.type = type;
    this.model = model;
    this.submitted = false;
    this.updateFormType(type);
    if (model.id === null || model.id === undefined) {
      this.formGroup = this.fb.group({
        name: [{value: null, disabled: this.isInfo}, [Validators.required]],
        status: [{value: false, disabled: this.isInfo}],
        topicId: [{value: null, disabled: this.isInfo}, [Validators.required]],
      });
    } else {
      this.formGroup = this.fb.group({
        name: [{value: this.model.name, disabled: true}, [Validators.required]],
        status: [{value: this.model.status, disabled: this.isInfo}],
        topicId: [{value: this.model.topic.id, disabled: this.isInfo}, [Validators.required]],
      });
    }
  }

  upload(files: File[]) {
    // pick from one of the 4 styles of file uploads below
    this.basicUpload(files);
  }

  basicUpload(files: File[]) {
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f));
    this.uploadSevice.uploadBasic(formData)
      .subscribe(event => {
        this.imageName = event.message;
      });
  }

  // tslint:disable-next-line:typedef
  open(content: any) {
    this.modalReference = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      size: 'sl',
    });
    this.modalReference.result.then(
      (result: any) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason: any) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  save() {
    let category: any;
    this.submitted = true;
    if (this.formGroup.invalid) {
      // tslint:disable-next-line:only-arrow-functions
      $(function() {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'error',
          title: 'Kiểm tra thông tin các trường đã nhập'
        });
      });
      return;
    }
    if (this.isEdit) {
      category = {
        name: this.formGroup.get('name').value,
        status: this.formGroup.get('status').value,
        topic: this.listTopic.filter(x => x.id == this.formGroup.get('topicId').value)[0],
        id: this.model.id,
        image: this.imageName
      };
    } else {
      category = {
        name: this.formGroup.get('name').value,
        status: this.formGroup.get('status').value,
        topic: this.listTopic.filter(x => x.id == this.formGroup.get('topicId').value)[0],
        image: this.imageName
      };
    }
    if (this.isAdd) {
      this.categoryService.createCategory(category).subscribe(res => {
          this.closeModalReloadData();
          // tslint:disable-next-line:only-arrow-functions
          $(function() {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });

            Toast.fire({
              type: 'success',
              title: 'Thêm mới thành công'
            });
          });
          this.modalReference.dismiss();
        },
        err => {
          // tslint:disable-next-line:only-arrow-functions
          $(function() {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });

            Toast.fire({
              type: 'error',
              title: 'Thêm mới thất bại'
            });
          });
        });
    }
    if (this.isEdit) {
      this.categoryService.updateCategory(category.id, category).subscribe(res => {
          this.closeModalReloadData();
          // tslint:disable-next-line:only-arrow-functions
          $(function() {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });

            Toast.fire({
              type: 'success',
              title: 'Cập nhật thành công'
            });
          });
          this.modalReference.dismiss();
        },
        err => {
          // tslint:disable-next-line:only-arrow-functions
          $(function() {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });

            Toast.fire({
              type: 'error',
              title: 'Cập nhật thất bại'
            });
          });
        });
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public closeModalReloadData(): void {
    this.submitted = false;
    this.eventEmit.emit('success');
  }
}
