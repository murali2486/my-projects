import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../../../core/services/authentication.service';
import { AlertService } from './../../../../core/services/alert.service';
import { UserService } from './../../../../core/services/user.service';
import { Constants } from './../../../../core/utilities/constants';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  fieldGroup = Constants.REGISTER_FORM;
  register = {
    btnType: 'mat-raised-button',
    color: 'primary',
    disabled: false,
    label: 'Register'
  }
  cancel = {
    btnType: 'mat-raised-button',
    color: null,
    disabled: false,
    label: 'Cancel'
  }
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({});
  }

  onSubmit() {
    this.loading = true;
    this.userService.register(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
  redirect(){
    this.router.navigate(['login']);
  }
}
