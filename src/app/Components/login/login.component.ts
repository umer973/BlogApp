import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../../Services/loader.service';
import { NotificationServiceService } from '../../Services/notification-service.service';
import { User } from '../../Models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading: boolean = false;
  user: User;
  userName: "Admin";
  password: "Password1"

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loaderservice: LoaderService,
    private notificationService: NotificationServiceService
  ) { }

  ngOnInit() {

    this.clear();
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required,]]
    });


  }
  get f() { return this.loginForm.controls; }

  login() {
    

    if (this.loginForm.valid) {
      this.submitted = true;
      this.user = this.loginForm.getRawValue();

      this.loaderservice.show();
      if (this.user.userName=="Admin" && this.user.password=="Password1") {
        this.router.navigate(['/layout'], { queryParams: { 'user': this.userName } });
        localStorage.setItem('isLoggedin', 'true');
        this.loaderservice.hide();
      }
      else {
        this.notificationService.showError("Invalid login","");
        this.loaderservice.hide();
      }
    }
    else {
      this.submitted = true;
    }

  }
  clear() {

  }
}
