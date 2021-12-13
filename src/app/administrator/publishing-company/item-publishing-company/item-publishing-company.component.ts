import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TopicService} from '../../../service/topic/topic.service';
import {UploadService} from '../../../service/upload/upload.service';
import {PublishingCompanyService} from '../../../service/publishing-company/publishing-company.service';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-item-publishing-company',
  templateUrl: './item-publishing-company.component.html',
  styleUrls: ['./item-publishing-company.component.scss']
})


export class ItemPublishingCompanyComponent implements OnInit {
  @ViewChild('content', {static: false}) public childModal!: ModalDirective;
  @Input() listPublishingCompany: Array<any>;
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
  model: any;
  submitted = false;
  arrCheck = [];
  formGroup: FormGroup;
  formName = 'nhà xuất bản';

  constructor(private modalService: NgbModal,
              private fb: FormBuilder,
              private publishingCompanyService: PublishingCompanyService,
              private topic: TopicService, private uploadSevice: UploadService) {
  }

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
  }

  view(model: any, type = null): void {
    this.arrCheck = this.listPublishingCompany;
    this.open(this.childModal);
    this.type = type;
    this.model = model;
    this.submitted = false;
    this.updateFormType(type);
    if (model.id === null || model.id === undefined) {
      this.formGroup = this.fb.group({
        name: [{value: null, disabled: this.isInfo}, [Validators.required]],
        status: [{value: false, disabled: this.isInfo}],
        address: [{value: null, disabled: this.isInfo}, [Validators.required]],
        email: [{value: null, disabled: this.isInfo}, [Validators.required]],
        phone: [{value: null, disabled: this.isInfo}, [Validators.required]],
      });
    } else {
      this.formGroup = this.fb.group({
        name: [{value: this.model.name, disabled: this.isInfo}, [Validators.required]],
        phone: [{value: this.model.phone, disabled: this.isInfo}, [Validators.required]],
        email: [{value: this.model.email, disabled: this.isInfo}, [Validators.required]],
        address: [{value: this.model.address, disabled: this.isInfo}, [Validators.required]],
        status: [{value: this.model.status, disabled: this.isInfo}],
      });
    }
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
    let PublishingCompany: any;
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
      PublishingCompany = {
        name: this.formGroup.get('name').value,
        status: this.formGroup.get('status').value,
        email: this.formGroup.get('email').value,
        phone: this.formGroup.get('phone').value,
        address: this.formGroup.get('address').value,
        id: this.model.id
      };
    } else {
      PublishingCompany = {
        name: this.formGroup.get('name').value,
        status: this.formGroup.get('status').value,
        email: this.formGroup.get('email').value,
        phone: this.formGroup.get('phone').value,
        address: this.formGroup.get('address').value,
      };
    }
    if (this.isAdd) {
      this.publishingCompanyService.createPublishingCompany(PublishingCompany).subscribe(res => {
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
      this.publishingCompanyService.updatePublishingCompany(PublishingCompany.id, PublishingCompany).subscribe(res => {
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
