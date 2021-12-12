(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administrator-publishing-company-publishing-company-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/administrator/publishing-company/item-publishing-company/item-publishing-company.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/administrator/publishing-company/item-publishing-company/item-publishing-company.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ title }}</h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"save()\">\r\n\r\n      <div class=\"form-group\">\r\n        <label>Tên nhà xuất bản</label>\r\n        <input\r\n          type=\"text\"\r\n          name=\"\"\r\n          class=\"form-control\"\r\n          formControlName=\"name\"\r\n          id=\"name\"\r\n        />\r\n        <div *ngIf=\"submitted && formGroup.controls['name'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['name'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Tên nhà xuất bản không được để trống\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Địa chỉ</label>\r\n        <input\r\n          type=\"text\"\r\n          name=\"\"\r\n          class=\"form-control\"\r\n          formControlName=\"address\"\r\n          id=\"address\"\r\n        />\r\n        <div *ngIf=\"submitted && formGroup.controls['address'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['address'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Địa chỉ không được để trống\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label>Email</label>\r\n        <input\r\n          type=\"text\"\r\n          name=\"\"\r\n          class=\"form-control\"\r\n          formControlName=\"email\"\r\n          id=\"email\"\r\n        />\r\n        <div *ngIf=\"submitted && formGroup.controls['email'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['email'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Email không được để trống\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Số điện thoại</label>\r\n        <input\r\n          type=\"text\"\r\n          name=\"\"\r\n          class=\"form-control\"\r\n          formControlName=\"phone\"\r\n          id=\"phone\"\r\n        />\r\n        <div *ngIf=\"submitted && formGroup.controls['phone'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['phone'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Số điện thoại không được để trống\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\" style=\"display:inline\">\r\n        <label for=\"status\">Trạng thái: </label>\r\n        <input type=\"checkbox\" name=\"status\" formControlName=\"status\" id=\"status\"/>\r\n        <label class=\"status\"\r\n               style=\"background-color: green; color: #fff;text-align: center; border-radius: 2px;vertical-align: middle; margin-left: 10px\"\r\n               for=\"status\" *ngIf=\"formGroup.controls.status.value\">Hoạt động</label>\r\n        <label class=\"status\"\r\n               style=\"background-color: red;color:#fff; ;text-align: center; border-radius: 2px;vertical-align: middle; margin-left: 10px\"\r\n               for=\"status\" *ngIf=\"!formGroup.controls.status.value\">Không hoạt động</label>\r\n      </div>\r\n      <div class=\"form-group\" align=\"center\">\r\n        <button\r\n          [hidden]=\"checkButton\"\r\n          type=\"submit\"\r\n          class=\"btn btn-success\"\r\n          style=\"width: 100px\"\r\n          *ngIf=\"isEdit || isAdd\"\r\n        >\r\n          Lưu\r\n        </button>\r\n        <button\r\n          class=\"btn btn-danger\"\r\n          style=\"width: 100px; margin-left: 20px\"\r\n          (click)=\"modal.dismiss('Cross click')\"\r\n        >\r\n          Thoát\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/administrator/publishing-company/list-publishing-company/list-publishing-company.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/administrator/publishing-company/list-publishing-company/list-publishing-company.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Danh sách nhà xuất bản</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Danh sách nhà xuất bản</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\"></h3>\r\n      <label>Lọc theo trạng thái: </label>\r\n      <select (change)=\"changeStatus($event.target.value)\" class=\"custom-select\"\r\n              style=\"margin-right: 10px; width: 200px\">\r\n        <option [selected]=\"isSelected\" disabled>--- Chọn trạng thái ---</option>\r\n        <option value=\"-1\">Tất cả</option>\r\n        <option value=\"1\">Hoạt động</option>\r\n        <option value=\"0\">Không hoạt động</option>\r\n      </select>\r\n      <button (click)=\"initModal({}, 'add')\" *ngIf=\"hasRoleAdmin\" class=\"btn btn-success\" style=\"width: 100px\">\r\n        Tạo mới\r\n      </button>\r\n      <button [hidden]=\"isDelete\" *ngIf=\"hasRoleAdmin\"\r\n              class=\"btn btn-danger\" style=\"margin-left: 15px; width: 100px\" data-toggle=\"modal\"\r\n              data-target=\"#modal-delete-list\">\r\n        Xóa\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-bordered\" id=\"table-nxb\">\r\n        <thead>\r\n        <tr>\r\n          <th scope=\"col\" style=\"text-align: center;width: 10px\" *ngIf=\"hasRoleAdmin\">\r\n            <input\r\n              type=\"checkbox\"\r\n              (change)=\"checkAllCheckBox($event)\"\r\n            />\r\n          </th>\r\n          <th style=\"width: 10px\">#</th>\r\n          <th style=\"text-align: center\">Tên nhà phát hành</th>\r\n          <th style=\"text-align: center\">Địa chỉ</th>\r\n          <th style=\"text-align: center\">Email</th>\r\n          <th style=\"text-align: center\">Số điện thoại</th>\r\n          <th style=\"text-align: center\">Trạng thái</th>\r\n          <th style=\"width: 200px; text-align: center\" *ngIf=\"hasRoleAdmin\">Thao tác</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let publishingCompany of listPublishingCompany; index as i\">\r\n          <td style=\"text-align: center\" *ngIf=\"hasRoleAdmin\">\r\n            <input\r\n              type=\"checkbox\"\r\n              [(ngModel)]=\"listPublishingCompany[i].checked\"\r\n              (ngModelChange)=\"changeModel()\"\r\n              value=\"{{ publishingCompany.id }}\"\r\n            />\r\n          </td>\r\n          <td style=\"text-align: center\">{{i + 1}}</td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{publishingCompany.name}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{publishingCompany.address}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{publishingCompany.email}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{publishingCompany.phone}}</p>\r\n          </td>\r\n\r\n          <td style=\"text-align: center\">\r\n            <label class=\"status\"\r\n                   style=\"background-color: green; color: #fff;text-align: center;vertical-align: middle;  padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;\"\r\n                   *ngIf=\"publishingCompany.status === true\">Hoạt động</label>\r\n            <label class=\"status\"\r\n                   style=\"background-color: red;color:#fff; ;text-align: center;vertical-align: middle;  padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;\"\r\n                   *ngIf=\"publishingCompany.status === false\">Không hoạt động</label>\r\n          </td>\r\n          <td>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(publishingCompany, 'edit')\" class=\"btn btn-block btn-warning\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(publishingCompany, 'show')\" class=\"btn btn-block btn-primary\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-info\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\r\n                        data-target=\"#modal-delete\" (click)=\"getPublishingCompanyId(publishingCompany.id)\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa nhà xuất bản</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa nhà xuất bản này ?</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deletePublishingCompany()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete-list\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa danh sách nhà xuất bản</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa danh sách nhà xuất bản này ?</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteListPublishingCompany()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<app-item-publishing-company (eventEmit)=\"getAllPublishingCompany()\"></app-item-publishing-company>\r\n");

/***/ }),

/***/ "./src/app/administrator/publishing-company/item-publishing-company/item-publishing-company.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/administrator/publishing-company/item-publishing-company/item-publishing-company.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmF0b3IvcHVibGlzaGluZy1jb21wYW55L2l0ZW0tcHVibGlzaGluZy1jb21wYW55L2l0ZW0tcHVibGlzaGluZy1jb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/administrator/publishing-company/item-publishing-company/item-publishing-company.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/administrator/publishing-company/item-publishing-company/item-publishing-company.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ItemPublishingCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPublishingCompanyComponent", function() { return ItemPublishingCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _service_topic_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/topic/topic.service */ "./src/app/service/topic/topic.service.ts");
/* harmony import */ var _service_upload_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/upload/upload.service */ "./src/app/service/upload/upload.service.ts");
/* harmony import */ var _service_publishing_company_publishing_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/publishing-company/publishing-company.service */ "./src/app/service/publishing-company/publishing-company.service.ts");







let ItemPublishingCompanyComponent = class ItemPublishingCompanyComponent {
    constructor(modalService, fb, publishingCompanyService, topic, uploadSevice) {
        this.modalService = modalService;
        this.fb = fb;
        this.publishingCompanyService = publishingCompanyService;
        this.topic = topic;
        this.uploadSevice = uploadSevice;
        this.eventEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkButton = false;
        this.isAdd = false;
        this.isEdit = false;
        this.isInfo = false;
        this.title = '';
        this.submitted = false;
        this.arrCheck = [];
        this.formName = 'nhà xuất bản';
    }
    updateFormType(type) {
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
    ngOnInit() {
        this.submitted = false;
    }
    view(model, type = null) {
        this.arrCheck = this.listPublishingCompany;
        this.open(this.childModal);
        this.type = type;
        this.model = model;
        this.submitted = false;
        this.updateFormType(type);
        if (model.id === null || model.id === undefined) {
            this.formGroup = this.fb.group({
                name: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                status: [{ value: false, disabled: this.isInfo }],
                address: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                email: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                phone: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            });
        }
        else {
            this.formGroup = this.fb.group({
                name: [{ value: this.model.name, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                phone: [{ value: this.model.phone, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                email: [{ value: this.model.email, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                address: [{ value: this.model.address, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                status: [{ value: this.model.status, disabled: this.isInfo }],
            });
        }
    }
    // tslint:disable-next-line:typedef
    open(content) {
        this.modalReference = this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true,
            size: 'sl',
        });
        this.modalReference.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    save() {
        let PublishingCompany;
        this.submitted = true;
        if (this.formGroup.invalid) {
            // tslint:disable-next-line:only-arrow-functions
            $(function () {
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
        }
        else {
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
                $(function () {
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
            }, err => {
                // tslint:disable-next-line:only-arrow-functions
                $(function () {
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
                $(function () {
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
            }, err => {
                // tslint:disable-next-line:only-arrow-functions
                $(function () {
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
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    closeModalReloadData() {
        this.submitted = false;
        this.eventEmit.emit('success');
    }
};
ItemPublishingCompanyComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_publishing_company_publishing_company_service__WEBPACK_IMPORTED_MODULE_6__["PublishingCompanyService"] },
    { type: _service_topic_topic_service__WEBPACK_IMPORTED_MODULE_4__["TopicService"] },
    { type: _service_upload_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: false })
], ItemPublishingCompanyComponent.prototype, "childModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ItemPublishingCompanyComponent.prototype, "listPublishingCompany", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ItemPublishingCompanyComponent.prototype, "eventEmit", void 0);
ItemPublishingCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-publishing-company',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item-publishing-company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/administrator/publishing-company/item-publishing-company/item-publishing-company.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item-publishing-company.component.scss */ "./src/app/administrator/publishing-company/item-publishing-company/item-publishing-company.component.scss")).default]
    })
], ItemPublishingCompanyComponent);



/***/ }),

/***/ "./src/app/administrator/publishing-company/list-publishing-company/list-publishing-company.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/administrator/publishing-company/list-publishing-company/list-publishing-company.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmF0b3IvcHVibGlzaGluZy1jb21wYW55L2xpc3QtcHVibGlzaGluZy1jb21wYW55L2xpc3QtcHVibGlzaGluZy1jb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/administrator/publishing-company/list-publishing-company/list-publishing-company.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/administrator/publishing-company/list-publishing-company/list-publishing-company.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ListPublishingCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPublishingCompanyComponent", function() { return ListPublishingCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_publishing_company_publishing_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/publishing-company/publishing-company.service */ "./src/app/service/publishing-company/publishing-company.service.ts");
/* harmony import */ var _item_publishing_company_item_publishing_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../item-publishing-company/item-publishing-company.component */ "./src/app/administrator/publishing-company/item-publishing-company/item-publishing-company.component.ts");






let ListPublishingCompanyComponent = class ListPublishingCompanyComponent {
    constructor(publishingCompanyService, modalService, authenticationService) {
        this.publishingCompanyService = publishingCompanyService;
        this.modalService = modalService;
        this.authenticationService = authenticationService;
        this.hasRoleUser = false;
        this.hasRoleAdmin = false;
        this.isDelete = true;
        this.listFilterResult = [];
        this.listDelete = [];
        this.isSelected = true;
        this.authenticationService.currentUser.subscribe(value => this.currentUser = value);
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
    }
    ngOnInit() {
        this.getAllPublishingCompany();
    }
    getPublishingCompanyId(id) {
        this.id = id;
    }
    initModal(model, type = null) {
        this.view.view(model, type);
    }
    checkAllCheckBox(ev) {
        this.listPublishingCompany.forEach((x) => (x.checked = ev.target.checked));
        this.changeModel();
    }
    changeModel() {
        const selectedPublishingCompany = [...this.listPublishingCompany]
            .filter((pc) => pc.checked)
            .map((p) => p.id);
        if (selectedPublishingCompany.length > 0) {
            this.isDelete = false;
        }
        else {
            this.isDelete = true;
        }
    }
    deletePublishingCompany() {
        this.publishingCompanyService.deletePublishingCompany(this.id).subscribe(() => {
            this.publishingCompanyService.getAllPublishingCompany().subscribe(listPublishingCompany => {
                this.listPublishingCompany = listPublishingCompany;
            });
            // tslint:disable-next-line:only-arrow-functions
            $(function () {
                $('#modal-delete').modal('hide');
            });
            // tslint:disable-next-line:only-arrow-functions
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'success',
                    title: 'Xóa thành công'
                });
            });
        }, () => {
            // tslint:disable-next-line:only-arrow-functions
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'error',
                    title: 'Xóa thất bại'
                });
            });
        });
    }
    getAllPublishingCompany() {
        this.publishingCompanyService.getAllPublishingCompany().subscribe(listPublishingCompany => {
            this.listPublishingCompany = listPublishingCompany;
            this.listFilterResult = this.listPublishingCompany;
            // tslint:disable-next-line:only-arrow-functions
            $(function () {
                $('#table-nxb').DataTable({
                    paging: true,
                    lengthChange: true,
                    retrieve: true,
                    searching: true,
                    ordering: false,
                    info: false,
                    autoWidth: true,
                });
            });
        });
    }
    deleteListPublishingCompany() {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.listPublishingCompany.length; i++) {
            if (this.listPublishingCompany[i].checked === true) {
                this.listDelete.push(this.listPublishingCompany[i].id);
            }
        }
        this.publishingCompanyService.deleteListPublishingCompany(this.listDelete).subscribe(res => {
            this.getAllPublishingCompany();
            // tslint:disable-next-line:only-arrow-functions
            $(function () {
                $('#modal-delete-list').modal('hide');
            });
            // tslint:disable-next-line:only-arrow-functions
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'success',
                    title: 'Xóa thành công'
                });
            });
            this.listDelete = [];
            this.isDelete = true;
        }, err => {
            // tslint:disable-next-line:only-arrow-functions
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'error',
                    title: 'Xóa thất bại'
                });
            });
        });
        this.getAllPublishingCompany();
    }
    changeStatus(event) {
        let list = [];
        // tslint:disable-next-line: radix
        switch (parseInt(event)) {
            case -1:
                this.listPublishingCompany = [...this.listFilterResult];
                break;
            case 1:
                list = [...this.listFilterResult];
                this.listPublishingCompany = list.filter(item => item.status === true);
                break;
            case 0:
                list = [...this.listFilterResult];
                this.listPublishingCompany = list.filter(item => item.status === false);
                break;
            default:
                break;
        }
    }
};
ListPublishingCompanyComponent.ctorParameters = () => [
    { type: _service_publishing_company_publishing_company_service__WEBPACK_IMPORTED_MODULE_4__["PublishingCompanyService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_item_publishing_company_item_publishing_company_component__WEBPACK_IMPORTED_MODULE_5__["ItemPublishingCompanyComponent"])
], ListPublishingCompanyComponent.prototype, "view", void 0);
ListPublishingCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-publishing-company',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-publishing-company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/administrator/publishing-company/list-publishing-company/list-publishing-company.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-publishing-company.component.scss */ "./src/app/administrator/publishing-company/list-publishing-company/list-publishing-company.component.scss")).default]
    })
], ListPublishingCompanyComponent);



/***/ }),

/***/ "./src/app/administrator/publishing-company/publishing-company-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/administrator/publishing-company/publishing-company-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: PublishingCompanyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishingCompanyRoutingModule", function() { return PublishingCompanyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _helper_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/auth-guard */ "./src/app/helper/auth-guard.ts");
/* harmony import */ var _list_publishing_company_list_publishing_company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-publishing-company/list-publishing-company.component */ "./src/app/administrator/publishing-company/list-publishing-company/list-publishing-company.component.ts");





const routes = [{
        path: '',
        canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        component: _list_publishing_company_list_publishing_company_component__WEBPACK_IMPORTED_MODULE_4__["ListPublishingCompanyComponent"]
    }];
let PublishingCompanyRoutingModule = class PublishingCompanyRoutingModule {
};
PublishingCompanyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PublishingCompanyRoutingModule);



/***/ }),

/***/ "./src/app/administrator/publishing-company/publishing-company.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/administrator/publishing-company/publishing-company.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PublishingCompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishingCompanyModule", function() { return PublishingCompanyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _publishing_company_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publishing-company-routing.module */ "./src/app/administrator/publishing-company/publishing-company-routing.module.ts");
/* harmony import */ var _list_publishing_company_list_publishing_company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-publishing-company/list-publishing-company.component */ "./src/app/administrator/publishing-company/list-publishing-company/list-publishing-company.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _item_publishing_company_item_publishing_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-publishing-company/item-publishing-company.component */ "./src/app/administrator/publishing-company/item-publishing-company/item-publishing-company.component.ts");







let PublishingCompanyModule = class PublishingCompanyModule {
};
PublishingCompanyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _list_publishing_company_list_publishing_company_component__WEBPACK_IMPORTED_MODULE_4__["ListPublishingCompanyComponent"],
            _item_publishing_company_item_publishing_company_component__WEBPACK_IMPORTED_MODULE_6__["ItemPublishingCompanyComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _publishing_company_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublishingCompanyRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        ]
    })
], PublishingCompanyModule);



/***/ })

}]);
//# sourceMappingURL=administrator-publishing-company-publishing-company-module-es2015.js.map