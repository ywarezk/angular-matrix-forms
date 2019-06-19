import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-template',
  template: `
    <input type="text" name="name" [(ngModel)]="myName" />
    <input type="text" name="name" [ngModel]="myName2" />
    <input type="text" name="name" ngModel />
    {{myName}}
  `,
  styleUrls: ['./name-template.component.css']
})
export class NameTemplateComponent implements OnInit {
  myName = 'Yariv';


  constructor() { }

  ngOnInit() {
  }

}
