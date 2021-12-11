import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CategoryService } from "../../../service/category/category.service";
import { Category } from "../../../model/category";
import { AuthenticationService } from "../../../service/auth/authentication.service";
import { UserToken } from "../../../model/user-token";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { DocumentService } from "src/app/service/document/document.service";
import { PublishingCompanyService } from "src/app/service/publishing-company/publishing-company.service";
import { AuthorService } from "src/app/service/author/author.service";
import { UploadService } from "src/app/service/upload/upload.service";
import { environment } from "src/environments/environment";
import { Author } from "../../../model/author";

declare const myTest: any;
declare var $: any;
declare var Swal: any;

@Component({
  selector: "app-item-product",
  templateUrl: "./item-product.component.html",
  styleUrls: ["./item-product.component.scss"],
})
export class ItemProductComponent implements OnInit {
  @ViewChild("content", { static: false }) public childModal!: ModalDirective;
  @Input() listHouse: Array<any>;
  @Output() eventEmit: EventEmitter<any> = new EventEmitter<any>();
  closeResult: string;
  checkButton = false;
  modalReference!: any;
  isAdd = false;
  isEdit = false;
  isInfo = false;
  title = "";
  type: any;
  status;
  listCategory: any[];
  listPublishing: any[];
  listAuthor: any[];
  listMainAuthor: any[];
  listAuthorOrigin: any[];
  fileName = "";
  listUtilitieAddToHouse: Author[] = [];
  myItems: File[] = [];
  arrayPicture: any[] = [];
  urlPicture: any[] = [];
  isLoading = false;
  idUser: any;
  model: any;
  submitted = false;
  arrCheck = [];
  formGroup: FormGroup;
  formName = "tài liệu";
  imageObject: Array<object> = [];

  currentUser: UserToken;
  hasRoleUser = false;
  hasRoleAdmin = false;
  grid: any = {
    rowData: [],
  };
  apiFileUrl = environment.apiUploadUrl;
  pageUtilitie = 1;
  pageSizeUtilitie = 2;
  pageImage = 1;
  pageSizeImage = 4;
  pageService = 1;
  pageSizeService = 4;
  public Editor = ClassicEditor;
  config = {
    toolbar: [
      "heading",
      "|",
      "bold",
      "italic",
      "Alignment",
      "Autoformat",
      "BlockQuote",
      "CKFinder",
      "CKFinderUploadAdapter",
      "Image",
      "Link",
      "Table",
      "TableToolbar",
      "TextTransformation",
      "MediaEmbed",
    ],
  };

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private documentService: DocumentService,
    private authorService: AuthorService,
    private uploadSevice: UploadService,
    private cdf: ChangeDetectorRef,
    private publishingService: PublishingCompanyService,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      (value) => (this.currentUser = value)
    );
    if (this.currentUser) {
      const roleList = this.currentUser.roles;
      for (const role of roleList) {
        if (role.authority === "ROLE_USER") {
          this.hasRoleUser = true;
        }
        if (role.authority === "ROLE_ADMIN") {
          this.hasRoleAdmin = true;
        }
      }
    }
  }

  updateFormType(type: any) {
    switch (type) {
      case "add":
        this.isInfo = false;
        this.isEdit = false;
        this.isAdd = true;
        this.title = `Thêm mới thông tin ${this.formName}`;
        break;
      case "show":
        this.isInfo = true;
        this.isEdit = false;
        this.isAdd = false;
        this.title = `Xem chi tiết thông tin ${this.formName}`;
        break;
      case "edit":
        this.isInfo = false;
        this.isEdit = true;
        this.isAdd = false;
        this.title = `Chỉnh sửa thông tin ${this.formName}`;
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
    this.idUser = JSON.parse(localStorage.getItem("user") || "{id}").id;
    this.fetchListAuthor();
    this.fetchListCategory();
    this.fetchListPublishing();
  }

  fetchListCategory() {
    this.categoryService.getAllCategory().subscribe((res) => {
      this.listCategory = res;
    });
  }

  fetchListPublishing() {
    this.publishingService.getAllPublishingCompany().subscribe((res) => {
      this.listPublishing = res;
    });
  }

  fetchListAuthor() {
    this.authorService.getAllAuthor().subscribe((res) => {
      this.listAuthorOrigin = res;
      this.listAuthor = [...this.listAuthorOrigin];
      this.listMainAuthor = [...this.listAuthorOrigin];
    });
  }
  getDocumentById(id: any) {
    this.documentService.get(id).subscribe((res) => {
      this.model = res;
    });
  }
  view(model: any, type = null): void {
    this.resetData();
    this.open(this.childModal);
    this.type = type;
    this.model = model;
    this.submitted = false;
    this.updateFormType(type);
    if (model.id === null || model.id === undefined) {
      this.grid.rowData = [];
      this.formGroup = this.fb.group({
        name: [{ value: null, disabled: this.isInfo }, [Validators.required]],
        category: [
          { value: null, disabled: this.isInfo },
          [Validators.required],
        ],
        company: [
          { value: null, disabled: this.isInfo },
          [Validators.required],
        ],
        publishingYear: [
          { value: null, disabled: this.isInfo },
          [Validators.required],
        ],
        pageNumber: [
          { value: null, disabled: this.isInfo },
          [Validators.required],
        ],
        mainAuthor: [
          { value: null, disabled: this.isInfo },
          [Validators.required],
        ],
        author: [{ value: null, disabled: this.isInfo }, [Validators.required]],
        status: [{ value: false, disabled: true }],
      });
    } else {
      this.imageObject = [];
      this.listUtilitieAddToHouse = this.model.author;
      this.grid.rowData = this.model.services;
      this.urlPicture.push(this.model.image);
      this.fileName = this.model.fileName;
      this.listUtilitieAddToHouse = this.model.author;
      this.formGroup = this.fb.group({
        name: [
          { value: this.model.name, disabled: this.isInfo },
          [Validators.required],
        ],
        category: [
          { value: this.model.category.id, disabled: this.isInfo },
          [Validators.required],
        ],
        company: [
          { value: this.model.publishingCompany.id, disabled: this.isInfo },
          [Validators.required],
        ],
        publishingYear: [
          { value: this.model.publishingYear, disabled: this.isInfo },
          [Validators.required],
        ],
        mainAuthor: [
          { value: this.model.mainAuthor, disabled: this.isInfo },
          [Validators.required],
        ],
        pageNumber: [
          { value: this.model.pageNumber, disabled: this.isInfo },
          [Validators.required],
        ],
        author: [
          { value: this.listUtilitieAddToHouse[0].id, disabled: this.isInfo },
          [Validators.required],
        ],
        status: [{ value: this.model.status, disabled: false }],
      });
    }
  }

  upload(files: File[], type: any) {
    // pick from one of the 4 styles of file uploads below
    this.basicUpload(files, type);
  }

  basicUpload(files: File[], type: any) {
    var formData = new FormData();
    Array.from(files).forEach((f) => formData.append("file", f));
    this.uploadSevice.uploadBasic(formData).subscribe((event) => {
      switch (type) {
        case 0:
          this.urlPicture.push(event.message);
          break;
        case 1:
          this.fileName = event.message;
        default:
          break;
      }
    });
  }
  resetData() {
    this.fileName = "";
    this.urlPicture = [];
  }
  // tslint:disable-next-line:typedef
  open(content: any) {
    this.modalReference = this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      centered: true,
      size: "xl",
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
    let document: any;
    this.submitted = true;
    if (this.formGroup.invalid && this.validCategoryMeta() === false) {
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });

        Toast.fire({
          type: "error",
          title: "Kiểm tra thông tin các trường đã nhập",
        });
      });
      return;
    }
    if (
      this.fileName === null ||
      this.fileName == undefined ||
      this.fileName === ""
    ) {
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });

        Toast.fire({
          type: "error",
          title: "File đính kèm không được để trống",
        });
      });
      return;
    }
    if (
      this.urlPicture === null ||
      this.urlPicture == undefined ||
      this.urlPicture.length === 0
    ) {
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });

        Toast.fire({
          type: "error",
          title: "Ảnh không được để trống",
        });
      });
      return;
    }
    if (this.isEdit) {
      document = {
        id: this.model.id,
        name: this.formGroup.get("name").value,
        mainAuthor: this.formGroup.get("mainAuthor").value,
        category: {
          id: this.formGroup.get("category").value,
        },
        publishingCompany: {
          id: this.formGroup.get("company").value,
        },
        author: this.listUtilitieAddToHouse,
        image: this.urlPicture[0],
        fileName: this.fileName,
        publishingYear: this.formGroup.get("publishingYear").value,
        pageNumber: this.formGroup.get("pageNumber").value,
      };
    } else {
      document = {
        name: this.formGroup.get("name").value,
        category: {
          id: this.formGroup.get("category").value,
        },
        publishingCompany: {
          id: this.formGroup.get("company").value,
        },
        publishingYear: this.formGroup.get("publishingYear").value,
        pageNumber: this.formGroup.get("pageNumber").value,
        fileName: this.fileName,
        image: this.urlPicture[0],
        mainAuthor: this.formGroup.get("mainAuthor").value,
        author: this.listUtilitieAddToHouse,
      };
    }
    if (this.isAdd) {
      this.documentService.create(document).subscribe(
        (res) => {
          this.closeModalReloadData();
          $(function () {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
            });

            Toast.fire({
              type: "success",
              title: "Thêm mới thành công",
            });
          });
          // this.grid.rowData = [];
          this.modalReference.dismiss();
        },
        (err) => {
          $(function () {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
            });

            Toast.fire({
              type: "error",
              title: "Thêm mới thất bại",
            });
          });
        }
      );
    }
    if (this.isEdit) {
      this.documentService.update(document.id, document).subscribe(
        (res) => {
          this.closeModalReloadData();
          $(function () {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
            });

            Toast.fire({
              type: "success",
              title: "Cập nhật thành công",
            });
          });
          this.modalReference.dismiss();
          this.imageObject = [];
        },
        (err) => {
          $(function () {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
            });

            Toast.fire({
              type: "error",
              title: "Cập nhật thất bại",
            });
          });
        }
      );
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      this.listUtilitieAddToHouse = [];
      this.urlPicture = [];
      return "by clicking on a backdrop";
    } else {
      this.listUtilitieAddToHouse = [];
      this.urlPicture = [];
      return `with: ${reason}`;
    }
  }

  public closeModalReloadData(): void {
    this.submitted = false;
    this.fileName = "";
    this.urlPicture = [];
    this.eventEmit.emit("success");
  }

  // getAllCategory() {
  //   this.categoryService.getAllCategoryStatusTrue().subscribe(listCategory => {
  //     this.listCategory = listCategory;
  //   });
  // }
  CheckExistAuthor(id: any) {
    var listAuthorClone = [...this.listAuthorOrigin];
    this.listAuthor = listAuthorClone.filter(
      (x) => x.id != this.formGroup.controls.mainAuthor.value
    );
    this.listAuthor.unshift({});
  }
  addUtilitieToHouse(id) {
    var utilitie2 = [];
    if (id !== null && typeof  id !== 'undefined' && id !== '') {
      const utilitie1 = this.listAuthor.filter((utilitie) => utilitie.id == id);

      if (utilitie1.length > 0) {
        utilitie2 = this.listUtilitieAddToHouse.filter(
          (utilitie) => utilitie1[0].id == utilitie.id      );
      }
      if (utilitie2 !== null) {
        if (utilitie2.length == 0) {
          if (utilitie1.length > 0) {
            this.listUtilitieAddToHouse.push(utilitie1[0]);
          }
        }
      }
    }
  }

  delete(id) {
    const indexOf = this.listUtilitieAddToHouse.indexOf(id);
    this.listUtilitieAddToHouse.splice(indexOf, 1);
  }

  pushDeleteImage(i) {
    const indexOf = this.urlPicture.indexOf(i);
    this.urlPicture.splice(indexOf, 1);
  }

  onClick() {
    myTest();
  }

  addMeta(event: any) {
    const model = {
      name: "",
      price: "",
      status: true,
      validName: false,
      validPrice: false,
    };
    this.grid.rowData.push(model);
  }

  btnDeleteClickedHandler(event: any) {
    const indexOfItem = this.grid.rowData.indexOf(event);
    this.grid.rowData.splice(indexOfItem, 1);
  }

  validCategoryMeta() {
    let flag = false;
    this.grid.rowData.forEach((item) => {
      if (item.name === "" || item.name === null || item.name === undefined) {
        item.validName = true;
        flag = true;
      } else {
        item.validName = false;
        flag = false;
      }

      if (
        item.price === "" ||
        item.price === null ||
        item.price === undefined
      ) {
        item.validPrice = true;
        flag = true;
      } else {
        item.validPrice = false;
        flag = false;
      }
    });
    if (flag === false) {
      return true;
    }
    return false;
  }
}
