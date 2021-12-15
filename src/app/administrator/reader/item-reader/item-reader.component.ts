import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UploadService} from '../../../service/upload/upload.service';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {environment} from '../../../../environments/environment';
import {UserService} from '../../../service/user/user.service';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-item-reader',
  templateUrl: './item-reader.component.html',
  styleUrls: ['./item-reader.component.scss']
})
export class ItemReaderComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private modalService: NgbModal,
              private fb: FormBuilder, private userService: UserService,
              private uploadService: UploadService) {
  }

  @ViewChild('content', {static: false}) public childModal!: ModalDirective;
  @Input() listReaders: Array<any>;
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
  formName = 'độc giả';
  listTopic: any[] = [];
  checkCatalog = false;

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
    if (model.catalog === 'Sinh viên') {
      this.checkCatalog = true;
    } else {
      this.checkCatalog = false;
    }
    this.arrCheck = this.listReaders;
    this.open(this.childModal);
    this.type = type;
    this.model = model;
    this.imageName = this.model.avt;
    this.submitted = false;
    this.updateFormType(type);
    if (model.id === null || model.id === undefined) {
      this.formGroup = this.fb.group({
        fullName: [{value: null, disabled: this.isInfo}, [Validators.required]],
        catalog: [{value: false, disabled: this.isInfo}],
        email: [{value: null, disabled: this.isInfo}, [Validators.required]],
        phone: [{value: null, disabled: this.isInfo}, [Validators.required]],
        address: [{value: null, disabled: this.isInfo}, [Validators.required]],
        gender: [{value: null, disabled: this.isInfo}, [Validators.required]],
        studentCode: [{value: null, disabled: this.isInfo}, [Validators.required]],
      });
    } else {
      this.formGroup = this.fb.group({
        fullName: [{value: this.model.fullName, disabled: this.isInfo}, [Validators.required]],
        catalog: [{value: this.model.catalog, disabled: this.isInfo}, [Validators.required]],
        email: [{value: this.model.email, disabled: this.isInfo}, [Validators.required]],
        phone: [{value: this.model.phone, disabled: this.isInfo}, [Validators.required]],
        address: [{value: this.model.address, disabled: this.isInfo}, [Validators.required]],
        gender: [{value: this.model.gender, disabled: this.isInfo}, [Validators.required]],
        studentCode: [{value: this.model.studentCode, disabled: this.isInfo}, [Validators.required]],
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
    this.uploadService.uploadBasic(formData)
      .subscribe(event => {
        this.imageName = event.message;
      });
  }

  // tslint:disable-next-line:typedef
  open(content: any) {
    this.modalReference = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      size: 'xl',
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
    let reader: any;
    this.submitted = true;
    if (this.model.catalog !== 'Sinh viên') {
      this.formGroup.controls.studentCode.setValue('abc');
    }
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
      reader = {
        fullName: this.formGroup.get('fullName').value,
        catalog: this.formGroup.get('catalog').value,
        email: this.formGroup.get('email').value,
        phone: this.formGroup.get('phone').value,
        address: this.formGroup.get('address').value,
        gender: this.formGroup.get('gender').value,
        studentCode: this.formGroup.get('studentCode').value,
        id: this.model.id,
        avt: this.imageName
      };
    } else {
      reader = {
        fullName: this.formGroup.get('fullName').value,
        catalog: this.formGroup.get('catalog').value,
        email: this.formGroup.get('email').value,
        phone: this.formGroup.get('phone').value,
        address: this.formGroup.get('address').value,
        gender: this.formGroup.get('gender').value,
        studentCode: this.formGroup.get('studentCode').value,
        avt: this.imageName
      };
    }
    if (this.isAdd) {
      this.userService.register(reader).subscribe(res => {
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
      this.userService.updateUser(reader).subscribe(res => {
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

  selectCatalog(item) {
    if (item === 'Sinh viên') {
      this.checkCatalog = true;
    } else {
      this.checkCatalog = false;
    }
  }
}
