import {Component, OnInit, ViewChild} from '@angular/core';
import {UserToken} from '../../../model/user-token';
import {environment} from '../../../../environments/environment';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationService} from '../../../service/auth/authentication.service';
import {Author} from '../../../model/author';
import {AuthorService} from '../../../service/author/author.service';
import {ItemAuthorComponent} from '../item-author/item-author.component';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.scss']
})
export class ListAuthorComponent implements OnInit {

  // @ts-ignore
  @ViewChild(ItemAuthorComponent) view!: ItemAuthorComponent;
  listAuthor: Author[];
  currentUser: UserToken;
  hasRoleUser = false;
  hasRoleAdmin = false;
  isDelete = true;
  id: number;
  listFilterResult: Author[] = [];
  listDelete: number[] = [];
  isSelected = true;
  apiUrl = environment.apiUrl;
  apiFileUrl = environment.apiUploadUrl;
  imageName = '';


  constructor(private authorService: AuthorService,
              private modalService: NgbModal,
              private authenticationService: AuthenticationService) {
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
    this.getAllAuthor();
  }

  getAuthorId(id: number) {
    this.id = id;
  }

  initModal(model: any, type = null): void {
    this.view.view(model, type);
  }

  checkAllCheckBox(ev) {
    this.listAuthor.forEach((x) => (x.checked = ev.target.checked));
    this.changeModel();
  }

  changeModel() {
    const selectedAuthor = [...this.listAuthor]
      .filter((author) => author.checked)
      .map((p) => p.id);
    if (selectedAuthor.length > 0) {
      this.isDelete = false;
    } else {
      this.isDelete = true;
    }
  }

  deleteAuthor() {
    this.authorService.deleteAuthor(this.id).subscribe(() => {
      this.authorService.getAllAuthor().subscribe(listAuthor => {
        this.listAuthor = listAuthor;
      });
      // tslint:disable-next-line:only-arrow-functions
      $(function() {
        $('#modal-delete').modal('hide');
      });
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
          title: 'Xóa thành công'
        });
      });
    }, () => {
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
          title: 'Xóa thất bại'
        });
      });
    });
  }

  getAllAuthor() {
    this.authorService.getAllAuthor().subscribe(listAuthor => {
      this.listAuthor = listAuthor;
      this.listFilterResult = this.listAuthor;
      // tslint:disable-next-line:only-arrow-functions
      $(function() {
        $('#table-author').DataTable({
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

  deleteListAuthor() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listAuthor.length; i++) {
      if (this.listAuthor[i].checked === true) {
        this.listDelete.push(this.listAuthor[i].id);
      }
    }
    this.authorService.deleteListAuthor(this.listDelete).subscribe(res => {
        this.getAllAuthor();
        // tslint:disable-next-line:only-arrow-functions
        $(function() {
          $('#modal-delete-list').modal('hide');
        });
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
            title: 'Xóa thành công'
          });
        });
        this.listDelete = [];
        this.isDelete = true;
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
            title: 'Xóa thất bại'
          });
        });
      });
    this.getAllAuthor();
  }

  changeStatus(event: any) {
    let list = [];
    // tslint:disable-next-line: radix
    switch (parseInt(event)) {
      case -1:
        this.listAuthor = [...this.listFilterResult];
        break;
      case 1:
        list = [...this.listFilterResult];
        this.listAuthor = list.filter(item => item.status === true);
        break;
      case 0:
        list = [...this.listFilterResult];
        this.listAuthor = list.filter(item => item.status === false);
        break;
      default:
        break;
    }
  }

}
