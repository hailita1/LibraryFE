import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {House} from '../../../model/house';
import {Bill} from '../../../model/bill';
import {AuthenticationService} from '../../../service/auth/authentication.service';
import {UserToken} from '../../../model/user-token';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  @ViewChild('content', {static: false}) public childModal!: ModalDirective;
  closeResult: string;
  modalReference!: any;
  currentHouse: House;
  listReview: Bill[] = [];
  listReview1: Bill[] = [];
  starAverage: number = 0;
  currentUser: UserToken;
  id: any;
  imageObject: Array<object> = [];

  constructor(private modalService: NgbModal,
              private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(value => {
      this.currentUser = value;
    });
  }

  ngOnInit(): void {
  }

  view(model: any): void {
    this.currentHouse = model;
    this.open(this.childModal);
    this.id = model.id;
    for (var i = 0; i < this.currentHouse.images.length; i++) {
      this.imageObject[i] = {
        image: this.currentHouse.images[i].link,
        thumbImage: this.currentHouse.images[i].link
      };
    }
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

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
