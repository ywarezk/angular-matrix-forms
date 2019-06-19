import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-login-template',
  template: `
    <!--NgFrom -->
    <form #loginFrom="ngForm" (submit)="handleLogin(loginFrom)">
      <input type="email" name="email" ngModel required email #emailNgModel="ngModel" />
      {{emailNgModel.errors | json}}
      <div *ngIf="loginForm?.submitted && emailNgModel?.errors?.required">
        The email is required
      </div>
      <div *ngIf="loginForm?.submitted && emailNgModel?.errors?.email">
        The email is not in the right pattern
      </div>
      <input type="password" name="password" ngModel required minlength="5" maxlength="100" pattern="[a-z]+" #passwordNgModel="ngModel" />
      {{initialPassword}}
      <div *ngIf="loginForm?.submitted && passwordNgModel?.errors?.minlength">
        please supply more than 5 characters
      </div>
      <div *ngIf="loginForm?.submitted && passwordNgModel?.errors?.required">
        The password is required
      </div>
    </form>
  `,


  styleUrls: ['./login-template.component.css']
})
export class LoginTemplateComponent implements OnInit {
  // initialPassword = '12345';

  handleLogin = (form: NgForm) => {
    console.log(form.controls['email'].value);
    console.log(form.controls['password'].value);
  }

  constructor() { }

  ngOnInit() {
  }

}
