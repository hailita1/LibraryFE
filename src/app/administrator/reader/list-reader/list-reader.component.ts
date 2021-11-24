import {Component, OnInit, ViewChild} from '@angular/core';
import {UserToken} from '../../../model/user-token';
import {environment} from '../../../../environments/environment';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationService} from '../../../service/auth/authentication.service';
import {UserService} from '../../../service/user/user.service';
import {User} from '../../../model/user';
import {ItemReaderComponent} from '../item-reader/item-reader.component';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-list-reader',
  templateUrl: './list-reader.component.html',
  styleUrls: ['./list-reader.component.scss']
})
export class ListReaderComponent implements OnInit {

  // @ts-ignore
  @ViewChild(ItemReaderComponent) view!: ItemReaderComponent ;
  listReader: User[];
  currentUser: UserToken;
  hasRoleUser = false;
  hasRoleAdmin = false;
  isDelete = true;
  id: number;
  listFilterResult: User[] = [];
  listDelete: number[] = [];
  isSelected = true;
  apiUrl = environment.apiUrl;
  apiFileUrl = environment.apiUploadUrl;
  imageName = '';


  constructor(private userService: UserService,
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
    this.getAllReader();
  }

  getReaderId(id: number) {
    this.id = id;
  }

  initModal(model: any, type = null): void {
    this.view.view(model, type);
  }

  checkAllCheckBox(ev) {
    this.listReader.forEach((x) => (x.checked = ev.target.checked));
    this.changeModel();
  }

  changeModel() {
    const selectedReader = [...this.listReader]
      .filter((reader) => reader.checked)
      .map((p) => p.id);
    if (selectedReader.length > 0) {
      this.isDelete = false;
    } else {
      this.isDelete = true;
    }
  }

  deleteReader() {
    this.userService.deleteUser(this.id).subscribe(() => {
      this.userService.getAllUser().subscribe(listReader => {
        this.listReader = listReader;
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

  getAllReader() {
    this.userService.getAllUser().subscribe(listReader => {
      this.listReader = listReader;
      this.listFilterResult = this.listReader;
      // tslint:disable-next-line:only-arrow-functions
      $(function() {
        $('#table-reader').DataTable({
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

  deleteListReader() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listReader.length; i++) {
      if (this.listReader[i].checked === true) {
        this.listDelete.push(this.listReader[i].id);
      }
    }
    this.userService.deleteListReader(this.listDelete).subscribe(res => {
        this.getAllReader();
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
    this.getAllReader();
  }

  changeStatus(event: any) {
    let list = [];
    // tslint:disable-next-line: radix
    switch (parseInt(event)) {
      case -1:
        this.listReader = [...this.listFilterResult];
        break;
      case 1:
        list = [...this.listFilterResult];
        this.listReader = list.filter(item => item.status === true);
        break;
      case 0:
        list = [...this.listFilterResult];
        this.listReader = list.filter(item => item.status === false);
        break;
      default:
        break;
    }
  }

}
