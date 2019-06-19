import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {idValidator} from 'matrix-validations';

@Component({
  selector: 'app-login-reactive',
  template: `
    <form [formGroup]="myLogin" (submit)="handleLogin()">
      <input type="email" [formControlName]="'email'"  />
      
      <input type="password" formControlName="passwordYariv" minlength="5" matrixId />
      <button type="submit">submit</button>
    </form>
  `,
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent {
  myLogin = new FormGroup({
    email : new FormControl(undefined, [Validators.required, Validators.email]),
    passwordYariv: new FormControl(
      undefined,
      [Validators.pattern("[a-z]+")])
  });

  handleLogin = () => {
    console.log(this.myLogin.controls['email'].value);
  }

  constructor() { }

}
