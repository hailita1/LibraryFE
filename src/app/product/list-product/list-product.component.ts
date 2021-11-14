import {Component, OnInit, ViewChild} from '@angular/core';
import {UserToken} from '../../model/user-token';
import {AuthenticationService} from '../../service/auth/authentication.service';
import {House} from '../../model/house';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ItemProductComponent} from './item-product/item-product.component';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  // @ts-ignore
  @ViewChild(ItemProductComponent) view!: ItemProductComponent;
  listHouse: House[];
  currentUser: UserToken;
  hasRoleUser = false;
  hasRoleAdmin = false;
  isDelete = true;
  id: number;
  listFilterResult: House[] = [];
  listDelete: number[] = [];
  isSelected = true;

  constructor(private modalService: NgbModal,
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
  }

  getHouseId(id: number) {
    this.id = id;
  }

  initModal(model: any, type = null): void {
    this.view.view(model, type);
  }

  checkAllCheckBox(ev) {
    this.listHouse.forEach((x) => (x.checked = ev.target.checked));
    this.changeModel();
  }

  changeModel() {
    const selectedHouse = [...this.listHouse]
      .filter((house) => house.checked)
      .map((p) => p.id);
    if (selectedHouse.length > 0) {
      this.isDelete = false;
    } else {
      this.isDelete = true;
    }
  }

  changeStatus(event: any) {
    let list = [];
    // tslint:disable-next-line: radix
    switch (parseInt(event)) {
      case -1:
        this.listHouse = [...this.listFilterResult];
        break;
      case 1:
        list = [...this.listFilterResult];
        this.listHouse = list.filter(item => item.status === true);
        break;
      case 0:
        list = [...this.listFilterResult];
        this.listHouse = list.filter(item => item.status === false);
        break;
      default:
        break;
    }
  }
}
