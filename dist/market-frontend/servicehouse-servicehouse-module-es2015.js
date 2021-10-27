(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicehouse-servicehouse-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicehouse/itemservicehouse/itemservicehouse.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/servicehouse/itemservicehouse/itemservicehouse.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ title }}</h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"save()\">\r\n      <div class=\"form-group\">\r\n        <label>Tên dịch vụ</label>\r\n        <input\r\n          type=\"text\"\r\n          name=\"\"\r\n          class=\"form-control\"\r\n          formControlName=\"name\"\r\n          id=\"name\"\r\n        />\r\n        <div *ngIf=\"submitted && formGroup.controls['name'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['name'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Tên dịch vụ không được để trống\r\n          </div>\r\n        </div>\r\n        <label>Thời gian sử dụng</label>\r\n        <input\r\n          type=\"text\"\r\n          name=\"\"\r\n          class=\"form-control\"\r\n          formControlName=\"times\"\r\n          id=\"times\"\r\n        />\r\n        <div *ngIf=\"submitted && formGroup.controls['times'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['times'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Thời gian sử dụng dịch vụ không được để trống\r\n          </div>\r\n        </div>\r\n        <label>Giá tiền dịch vụ</label>\r\n        <input\r\n          type=\"number\"\r\n          name=\"\"\r\n          class=\"form-control\"\r\n          formControlName=\"price\"\r\n          id=\"price\"\r\n        />\r\n        <div *ngIf=\"submitted && formGroup.controls['price'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['price'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Giá tiền dịch vụ\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\" style=\"display:inline\">\r\n        <label for=\"status\">Trạng thái: </label>\r\n        <input type=\"checkbox\" name=\"status\" formControlName=\"status\" id=\"status\"/>\r\n        <label class=\"status\"\r\n               style=\"background-color: green; color: #fff;text-align: center; border-radius: 2px;vertical-align: middle;\"\r\n               for=\"status\" *ngIf=\"formGroup.controls.status.value\">Hoạt động</label>\r\n        <label class=\"status\"\r\n               style=\"background-color: red;color:#fff; ;text-align: center; border-radius: 2px;vertical-align: middle;\"\r\n               for=\"status\" *ngIf=\"!formGroup.controls.status.value\">Không hoạt động</label>\r\n      </div>\r\n      <div class=\"form-group\" align=\"center\">\r\n        <button\r\n          [hidden]=\"checkButton\"\r\n          type=\"submit\"\r\n          class=\"btn btn-success\"\r\n          style=\"width: 100px\"\r\n          *ngIf=\"isEdit || isAdd\"\r\n        >\r\n          Lưu\r\n        </button>\r\n        <button\r\n          class=\"btn btn-danger\"\r\n          style=\"width: 100px; margin-left: 20px\"\r\n          (click)=\"modal.dismiss('Cross click')\"\r\n        >\r\n          Thoát\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicehouse/list-servicehouse/list-servicehouse.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/servicehouse/list-servicehouse/list-servicehouse.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Danh sách dịch vụ</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Danh sách dịch vụ</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\"></h3>\r\n      <label>Lọc theo trạng thái: </label>\r\n      <select (change)=\"changeStatus($event.target.value)\" class=\"custom-select\"\r\n              style=\"margin-right: 10px; width: 200px\">\r\n        <option [selected]=\"isSelected\" disabled>--- Chọn trạng thái ---</option>\r\n        <option value=\"-1\">Tất cả</option>\r\n        <option value=\"1\">Hoạt động</option>\r\n        <option value=\"0\">Không hoạt động</option>\r\n      </select>\r\n      <button (click)=\"initModal({}, 'add')\" *ngIf=\"hasRoleAdmin\" class=\"btn btn-success\" style=\"width: 100px\">\r\n        Tạo mới\r\n      </button>\r\n      <button [hidden]=\"isDelete\" *ngIf=\"hasRoleAdmin\"\r\n              class=\"btn btn-danger\" style=\"margin-left: 15px; width: 100px\" data-toggle=\"modal\"\r\n              data-target=\"#modal-delete-list\">\r\n        Xóa\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-bordered\" id=\"table-service\">\r\n        <thead>\r\n        <tr>\r\n          <th scope=\"col\" style=\"text-align: center;width: 10px\" *ngIf=\"hasRoleAdmin\">\r\n            <input\r\n              type=\"checkbox\"\r\n              (change)=\"checkAllCheckBox($event)\"\r\n            />\r\n          </th>\r\n          <th style=\"width: 10px\">#</th>\r\n          <th style=\"text-align: center\">Tên dịch vụ</th>\r\n          <th style=\"text-align: center\">Giá (VNĐ)</th>\r\n          <th style=\"text-align: center\">Trạng thái</th>\r\n          <th style=\"width: 200px; text-align: center\" *ngIf=\"hasRoleAdmin\">Thao tác</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let service of listService; index as i\">\r\n          <td style=\"text-align: center\" *ngIf=\"hasRoleAdmin\">\r\n            <input\r\n              type=\"checkbox\"\r\n              [(ngModel)]=\"listService[i].checked\"\r\n              (ngModelChange)=\"changeModel()\"\r\n              value=\"{{ service.id }}\"\r\n            />\r\n          </td>\r\n          <td style=\"text-align: center\">{{i + 1}}</td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{service.name}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{service.price}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <label class=\"status\"\r\n                   style=\"background-color: green; color: #fff;text-align: center; padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;vertical-align: middle;\"\r\n                   *ngIf=\"service.status === true\">Hoạt động</label>\r\n            <label class=\"status\"\r\n                   style=\"background-color: red;color:#fff; ;text-align: center;  padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;vertical-align: middle;\"\r\n                   *ngIf=\"service.status === false\">Không hoạt động</label>\r\n          </td>\r\n          <td>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\" *ngIf=\"hasRoleUser\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(service, 'edit')\" class=\"btn btn-block btn-warning\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" *ngIf=\"hasRoleAdmin\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(service, 'edit')\" class=\"btn btn-block btn-warning\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-check\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" *ngIf=\"hasRoleUser\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(service, 'show')\" class=\"btn btn-block btn-primary\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-info\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" *ngIf=\"hasRoleAdmin\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\r\n                        data-target=\"#modal-delete\" (click)=\"getserviceId(service.id)\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa dịch vụ</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa dịch vụ này</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteservice()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete-list\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa dịch vụ</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa danh sách dịch vụ này</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteListService()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n</section>\r\n<app-itemservicehouse (eventEmit)=\"getAllservice()\"></app-itemservicehouse>\r\n");

/***/ }),

/***/ "./src/app/servicehouse/itemservicehouse/itemservicehouse.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/servicehouse/itemservicehouse/itemservicehouse.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2Vob3VzZS9pdGVtc2VydmljZWhvdXNlL2l0ZW1zZXJ2aWNlaG91c2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/servicehouse/itemservicehouse/itemservicehouse.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/servicehouse/itemservicehouse/itemservicehouse.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ItemservicehouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemservicehouseComponent", function() { return ItemservicehouseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _service_service_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/service/service.service */ "./src/app/service/service/service.service.ts");





let ItemservicehouseComponent = class ItemservicehouseComponent {
    constructor(modalService, fb, serviceService) {
        this.modalService = modalService;
        this.fb = fb;
        this.serviceService = serviceService;
        this.eventEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkButton = false;
        this.isAdd = false;
        this.isEdit = false;
        this.isInfo = false;
        this.title = '';
        this.submitted = false;
        this.arrCheck = [];
        this.formName = 'dịch vụ';
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
                this.title = `Xác nhận thông tin ${this.formName}`;
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
        this.arrCheck = this.listServices;
        this.open(this.childModal);
        this.type = type;
        this.model = model;
        this.submitted = false;
        this.updateFormType(type);
        if (model.id === null || model.id === undefined) {
            this.formGroup = this.fb.group({
                name: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                times: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                price: [{ value: null, disabled: this.isInfo }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                status: [{ value: false, disabled: this.isInfo }],
            });
        }
        else {
            this.formGroup = this.fb.group({
                name: [{ value: this.model.name, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                times: [{ value: this.model.times, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                price: [{ value: this.model.price, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                status: [{ value: this.model.status, disabled: this.isInfo }]
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
        let Service;
        this.submitted = true;
        if (this.formGroup.invalid) {
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
            Service = {
                name: this.formGroup.get('name').value,
                times: this.formGroup.get('times').value,
                price: this.formGroup.get('price').value,
                status: this.formGroup.get('status').value,
                id: this.model.id,
            };
        }
        else {
            Service = {
                name: this.formGroup.get('name').value,
                times: this.formGroup.get('times').value,
                price: this.formGroup.get('price').value,
                status: this.formGroup.get('status').value,
            };
        }
        if (this.isAdd) {
            this.serviceService.createService(Service).subscribe(res => {
                this.closeModalReloadData();
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
            this.serviceService.updateService(Service.id, Service).subscribe(res => {
                this.closeModalReloadData();
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
ItemservicehouseComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_service_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: false })
], ItemservicehouseComponent.prototype, "childModal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ItemservicehouseComponent.prototype, "listServices", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ItemservicehouseComponent.prototype, "eventEmit", void 0);
ItemservicehouseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-itemservicehouse',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./itemservicehouse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicehouse/itemservicehouse/itemservicehouse.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./itemservicehouse.component.scss */ "./src/app/servicehouse/itemservicehouse/itemservicehouse.component.scss")).default]
    })
], ItemservicehouseComponent);



/***/ }),

/***/ "./src/app/servicehouse/list-servicehouse/list-servicehouse.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/servicehouse/list-servicehouse/list-servicehouse.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2Vob3VzZS9saXN0LXNlcnZpY2Vob3VzZS9saXN0LXNlcnZpY2Vob3VzZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/servicehouse/list-servicehouse/list-servicehouse.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/servicehouse/list-servicehouse/list-servicehouse.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListServicehouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListServicehouseComponent", function() { return ListServicehouseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/service/service.service */ "./src/app/service/service/service.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _itemservicehouse_itemservicehouse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../itemservicehouse/itemservicehouse.component */ "./src/app/servicehouse/itemservicehouse/itemservicehouse.component.ts");






let ListServicehouseComponent = class ListServicehouseComponent {
    constructor(serviceService, modalService, authenticationService) {
        this.serviceService = serviceService;
        this.modalService = modalService;
        this.authenticationService = authenticationService;
        this.hasRoleUser = false;
        this.hasRoleAdmin = false;
        this.isDelete = true;
        this.listDelete = [];
        this.listFilterResult = [];
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
        this.getAllservice();
    }
    initModal(model, type = null) {
        this.view.view(model, type);
    }
    checkAllCheckBox(ev) {
        this.listService.forEach((x) => (x.checked = ev.target.checked));
        this.changeModel();
    }
    changeModel() {
        const selectedservice = [...this.listService]
            .filter((service) => service.checked)
            .map((p) => p.id);
        if (selectedservice.length > 0) {
            this.isDelete = false;
        }
        else {
            this.isDelete = true;
        }
    }
    getserviceId(id) {
        this.id = id;
    }
    deleteservice() {
        this.serviceService.deleteService(this.id).subscribe(() => {
            this.serviceService.getAllService().subscribe(listService => {
                this.listService = listService;
            });
            $(function () {
                $('#modal-delete').modal('hide');
            });
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
    getAllservice() {
        this.serviceService.getAllService().subscribe(listService => {
            this.listService = listService;
            this.listFilterResult = this.listService;
            $(function () {
                $('#table-service').DataTable({
                    'paging': true,
                    'lengthChange': true,
                    'searching': true,
                    'retrieve': true,
                    'ordering': false,
                    'info': false,
                    'autoWidth': true,
                });
            });
        });
    }
    deleteListService() {
        for (var i = 0; i < this.listService.length; i++) {
            if (this.listService[i].checked === true) {
                this.listDelete.push(this.listService[i].id);
            }
        }
        this.serviceService.deleteListService(this.listDelete).subscribe(res => {
            this.getAllservice();
            $(function () {
                $('#modal-delete-list').modal('hide');
            });
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
        this.getAllservice();
    }
    changeStatus(event) {
        let list = [];
        // tslint:disable-next-line: radix
        switch (parseInt(event)) {
            case -1:
                this.listService = [...this.listFilterResult];
                break;
            case 1:
                list = [...this.listFilterResult];
                this.listService = list.filter(item => item.status === true);
                break;
            case 0:
                list = [...this.listFilterResult];
                this.listService = list.filter(item => item.status === false);
                break;
            default:
                break;
        }
    }
};
ListServicehouseComponent.ctorParameters = () => [
    { type: _service_service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_itemservicehouse_itemservicehouse_component__WEBPACK_IMPORTED_MODULE_5__["ItemservicehouseComponent"])
], ListServicehouseComponent.prototype, "view", void 0);
ListServicehouseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-servicehouse',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-servicehouse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicehouse/list-servicehouse/list-servicehouse.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-servicehouse.component.scss */ "./src/app/servicehouse/list-servicehouse/list-servicehouse.component.scss")).default]
    })
], ListServicehouseComponent);



/***/ }),

/***/ "./src/app/servicehouse/servicehouse-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/servicehouse/servicehouse-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ServicehouseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicehouseRoutingModule", function() { return ServicehouseRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _helper_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/auth-guard */ "./src/app/helper/auth-guard.ts");
/* harmony import */ var _list_servicehouse_list_servicehouse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-servicehouse/list-servicehouse.component */ "./src/app/servicehouse/list-servicehouse/list-servicehouse.component.ts");





const routes = [
    {
        path: '',
        canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        component: _list_servicehouse_list_servicehouse_component__WEBPACK_IMPORTED_MODULE_4__["ListServicehouseComponent"]
    }
];
let ServicehouseRoutingModule = class ServicehouseRoutingModule {
};
ServicehouseRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ServicehouseRoutingModule);



/***/ }),

/***/ "./src/app/servicehouse/servicehouse.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/servicehouse/servicehouse.module.ts ***!
  \*****************************************************/
/*! exports provided: ServicehouseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicehouseModule", function() { return ServicehouseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _servicehouse_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicehouse-routing.module */ "./src/app/servicehouse/servicehouse-routing.module.ts");
/* harmony import */ var _list_servicehouse_list_servicehouse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-servicehouse/list-servicehouse.component */ "./src/app/servicehouse/list-servicehouse/list-servicehouse.component.ts");
/* harmony import */ var _itemservicehouse_itemservicehouse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./itemservicehouse/itemservicehouse.component */ "./src/app/servicehouse/itemservicehouse/itemservicehouse.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let ServicehouseModule = class ServicehouseModule {
};
ServicehouseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_servicehouse_list_servicehouse_component__WEBPACK_IMPORTED_MODULE_4__["ListServicehouseComponent"], _itemservicehouse_itemservicehouse_component__WEBPACK_IMPORTED_MODULE_5__["ItemservicehouseComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _servicehouse_routing_module__WEBPACK_IMPORTED_MODULE_3__["ServicehouseRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]
    })
], ServicehouseModule);



/***/ })

}]);
//# sourceMappingURL=servicehouse-servicehouse-module-es2015.js.map