import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-name-reactive',
  template: `
    <input type="text" name="name" [formControl]="myName" />
  `,
  styleUrls: ['./name-reactive.component.css']
})
export class NameReactiveComponent implements OnInit {
  myName = new FormControl('Yariv');

  constructor() { }

  ngOnInit() {
  }

}
