import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from './../../../../core/services/authentication.service';
import { AlertService } from './../../../../core/services/alert.service';
import { Constants } from './../../../../core/utilities/constants';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  fieldGroup = Constants.LOGIN_FORM;
  form: FormGroup;
  login = {
    btnType: 'mat-raised-button',
    color: 'primary',
    disabled: false,
    label: 'Login'
  }
  register = {
    btnType: 'mat-raised-button',
    color: null,
    disabled: false,
    label: 'Register'
  }
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
      }
   }

  ngOnInit(): void {
    this.form = new FormGroup({});
  }

  onSubmit() {
    this.loading = true;
    this.authenticationService.login(this.form.get('username').value, this.form.get('password').value)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate([Constants.PG_ACCOUNTHOME]);
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
  }

  redirect(){
    this.router.navigate(['register']);
  }
}
