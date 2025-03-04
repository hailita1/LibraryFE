import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserToken} from '../../model/user-token';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../service/auth/authentication.service';
import {first} from 'rxjs/operators';
import {SocialAuthService} from 'angularx-social-login';
import {UserService} from '../../service/user/user.service';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.scss']
})
export class Login1Component implements OnInit {

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });
  returnUrl: string;
  loading = false;
  submitted = false;
  currentUser: UserToken;
  hasRoleAdmin = false;
  linkUrl: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private authService: SocialAuthService,
              private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(value => this.currentUser = value);
    if (this.currentUser) {
      const roleList = this.currentUser.roles;
      for (const role of roleList) {
        if (role.authority === 'ROLE_ADMIN') {
          this.hasRoleAdmin = true;
        }
      }
    }
    if (this.authenticationService.currentUserValue) {
      if (this.hasRoleAdmin) {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/']);
      }
    }
  }

  ngOnInit() {
    this.linkUrl = JSON.parse(localStorage.getItem('link'));
    if (this.linkUrl === null) {
      this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
    } else {
      this.returnUrl = this.linkUrl;
    }
  }

  login() {
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(this.loginForm.value.userName, this.loginForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          localStorage.setItem('ACCESS_TOKEN', data.accessToken);
          const roleList = data.roles;
          for (const role of roleList) {
            if (role.authority === 'ROLE_ADMIN') {
              this.returnUrl = '/admin';
            }
          }
          this.router.navigate([this.returnUrl]).finally(() => {
          });
          $(function() {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });

            Toast.fire({
              type: 'success',
              title: 'Đăng nhập thành công'
            });
          });
          localStorage.removeItem('link');
        },
        () => {
          this.loading = false;
          $(function() {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });

            Toast.fire({
              type: 'error',
              title: 'Đăng nhập thất bại'
            });
          });
        });
  }
}
