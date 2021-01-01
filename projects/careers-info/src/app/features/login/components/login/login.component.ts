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
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  fieldGroup = [
    {
      label: 'First Name',
      controlName: 'firstname',
      value: '',
      type: 'text',
      className: '',
      ngClass:'',
      minLength: '',
      maxLength: '',
      required: true,
      pattern: '',
      disabled: false,
      readonly: false,
      size: 16,
      minDate:'',
      maxDate: '',
      fileType: '',
      placeHolder: '',
      step: 0,
      min: 0,
      max: 10,
      width: 0,
      height: 0,
      autocomplete: 'off',
      rows:0,
      cols:0,
      checked: false,
      labelPosition: 'after',
      dropdownItems:[],
      color: null,
      btnType: 'mat-button',
      href:'',
      target:'',
      icon:''
    },
    {
      label: 'Last Name',
      controlName: 'lastname',
      value: '',
      type: 'text',
      className: '',
      ngClass:'',
      minLength: '',
      maxLength: '',
      required: false,
      pattern: '',
      disabled: false,
      readonly: false,
      size: 16,
      minDate:'',
      maxDate: '',
      fileType: '',
      placeHolder: '',
      step: 0,
      min: 0,
      max: 10,
      width: 0,
      height: 0,
      autocomplete: 'off',
      rows:0,
      cols:0,
      checked: false,
      labelPosition: 'after',
      dropdownItems:[],
      color: null,
      btnType: 'mat-button',
      href:'',
      target:'',
      icon:''
    }
  ];
  form: FormGroup;
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
    this.form.valueChanges.subscribe(value => {
      console.log(this.form);
    });
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
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

}
