import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameTemplateComponent } from './name-template/name-template.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NameReactiveComponent } from './name-reactive/name-reactive.component';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import {ValidationModule} from 'matrix-validations';

@NgModule({
  declarations: [
    AppComponent,
    NameTemplateComponent,
    NameReactiveComponent,
    LoginTemplateComponent,
    LoginReactiveComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ValidationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
