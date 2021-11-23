import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, DialogPosition, MatDialogConfig } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/service/auth/authentication.service';
import { TopicService } from 'src/app/service/topic/topic.service';
import { ItemTopicComponent } from '../item-topic/item-topic.component';
declare var $: any;
declare var Swal: any;
/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];
@Component({
  selector: 'app-list-topic',
  templateUrl: './list-topic.component.html',
  styleUrls: ['./list-topic.component.scss']
})
export class ListTopicComponent implements OnInit {
  @ViewChild(ItemTopicComponent, {static: false}) view!: ItemTopicComponent;
  listCategory: any[];
  currentUser: any;
  hasRoleUser = false;
  hasRoleAdmin = false;
  isDelete = true;
  id: number;
  listFilterResult: any[] = [];
  listDelete: number[] = [];
  isSelected = true;

  constructor(private categoryService: TopicService,
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
    this.getAllCategory();
  }

  getCategoryId(id: number) {
    this.id = id;
  }

  initModal(model: any, type = null): void {
    this.view.view(model, type);
  }

  checkAllCheckBox(ev) {
    this.listCategory.forEach((x) => (x.checked = ev.target.checked));
    this.changeModel();
  }

  changeModel() {
    const selectedCategory = [...this.listCategory]
      .filter((category) => category.checked)
      .map((p) => p.id);
    if (selectedCategory.length > 0) {
      this.isDelete = false;
    } else {
      this.isDelete = true;
    }
  }

  deleteCategory() {
    this.categoryService.deleteTopic(this.id).subscribe(() => {
      this.categoryService.getAllTopic().subscribe(listCategory => {
        this.listCategory = listCategory;
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

  getAllCategory() {
    this.categoryService.getAllTopic().subscribe(listCategory => {
      this.listCategory = listCategory;
      this.listFilterResult = this.listCategory;
      // tslint:disable-next-line:only-arrow-functions
      $(function() {
        $('#table-topic').DataTable({
          paging: true,
          lengthChange: true,
          retrieve: true,
          searching: true,
          ordering: false,
          info: false,
          autoWidth: false
        });
      });
    });
  }

  deleteListCategory() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listCategory.length; i++) {
      if (this.listCategory[i].checked === true) {
        this.listDelete.push(this.listCategory[i].id);
      }
    }
    this.categoryService.deleteListTopic(this.listDelete).subscribe(res => {
        this.getAllCategory();
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
    this.getAllCategory();
  }

  changeStatus(event: any) {
    let list = [];
    // tslint:disable-next-line: radix
    switch (parseInt(event)) {
      case -1:
        this.listCategory = [...this.listFilterResult];
        break;
      case 1:
        list = [...this.listFilterResult];
        this.listCategory = list.filter(item => item.status === true);
        break;
      case 0:
        list = [...this.listFilterResult];
        this.listCategory = list.filter(item => item.status === false);
        break;
      default:
        break;
    }
  }
}
