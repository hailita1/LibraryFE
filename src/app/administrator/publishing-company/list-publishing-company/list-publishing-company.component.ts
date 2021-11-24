import {Component, OnInit, ViewChild} from '@angular/core';

import {UserToken} from '../../../model/user-token';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationService} from '../../../service/auth/authentication.service';
import {PublishingCompanyService} from '../../../service/publishing-company/publishing-company.service';
import {PublishingCompany} from '../../../model/publishing-company';
import {ItemPublishingCompanyComponent} from '../item-publishing-company/item-publishing-company.component';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-list-publishing-company',
  templateUrl: './list-publishing-company.component.html',
  styleUrls: ['./list-publishing-company.component.scss']
})
export class ListPublishingCompanyComponent implements OnInit {
  // @ts-ignore
  @ViewChild(ItemPublishingCompanyComponent) view!: ItemPublishingCompanyComponent;
  listPublishingCompany: PublishingCompany[];
  currentUser: UserToken;
  hasRoleUser = false;
  hasRoleAdmin = false;
  isDelete = true;
  id: number;
  listFilterResult: PublishingCompany[] = [];
  listDelete: number[] = [];
  isSelected = true;

  constructor(private publishingCompanyService: PublishingCompanyService,
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
    this.getAllPublishingCompany();
  }

  getPublishingCompanyId(id: number) {
    this.id = id;
  }

  initModal(model: any, type = null): void {
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
    } else {
      this.isDelete = true;
    }
  }

  deletePublishingCompany() {
    this.publishingCompanyService.deletePublishingCompany(this.id).subscribe(() => {
      this.publishingCompanyService.getAllPublishingCompany().subscribe(listPublishingCompany => {
        this.listPublishingCompany = listPublishingCompany;
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

  getAllPublishingCompany() {
    this.publishingCompanyService.getAllPublishingCompany().subscribe(listPublishingCompany => {
      this.listPublishingCompany = listPublishingCompany;
      this.listFilterResult = this.listPublishingCompany;
      // tslint:disable-next-line:only-arrow-functions
      $(function() {
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
    this.getAllPublishingCompany();
  }

  changeStatus(event: any) {
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

}
