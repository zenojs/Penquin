import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormControl, FormBuilder, Validators, FormGroup } from "@angular/forms";
import { LoginService } from '../_services/login.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {
  formGroup: FormGroup; frgGroup1 :FormGroup;
  loading = false;
  returnUrl: string;

  mobile = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  gender = new FormControl('', [Validators.required]);
  dateofbirth = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(5)]);
  confirmPassword = new FormControl('', [Validators.required, Validators.minLength(5)]);

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.returnUrl = 'login';
    this.formGroup = this.formBuilder.group({
      mobile: new FormControl(this.mobile, [Validators.required]),
      email: new FormControl(this.email, [Validators.required, Validators.email]),
      name: new FormControl(this.name, [Validators.required]),
      gender: new FormControl(this.gender, [Validators.required]),
      //dateofbirth : new Date(),
      dateofbirth: new FormControl(this.dateofbirth, [Validators.required]),
      password: new FormControl(this.password, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(this.confirmPassword, [Validators.required, Validators.minLength(8)]),
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value ? null : { 'mismatch': true };
  }

  save() {
    this.loading = true;
    this.loginService.register(this.formGroup.value).subscribe(
      data => {
        
        //this.router.navigate([this.returnUrl]);
      },
      error => {
        console.log(error);
        //this.alertService.error(error);
        this.loading = false;
      });;
    //console.log(this.form.value);
    //this.dialogRef.close(this.form.value);
  }

  close() {
    this.router.navigate([this.returnUrl]);
  }

  getErrorMessage(type) {
    if (type == "email")
      return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
    else if (type == "mobile")
      return this.mobile.hasError('required') ? 'Mobile number is required' : '';
    else if (type == "name")
      return this.name.hasError('required') ? 'Enter your full name' : '';
    else if (type == "gender")
      return this.gender.hasError('required') ? 'Specify your gender' : '';
    else if (type == "dateofbirth")
      return this.dateofbirth.hasError('required') ? 'Enter your date of birth' : '';
    else if (type == "password")
      return this.password.hasError('required') ? 'Your password is missing' : '';
    else if (type == "confirmPassword") {
      return this.confirmPassword.hasError('required') ? 'Confirm password is missing'
        : this.password.value === this.confirmPassword.value ? '' :'Passwords not matching';
    }
  }
}