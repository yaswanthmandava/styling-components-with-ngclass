import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <ul>
      <li *ngFor="let user of users" [ngClass]="'card'">
        <h2>{{ user.name }}</h2>
        <span [ngSwitch]="user.format">
          <span
            *ngSwithCase="'InPerson'"
            [ngClass]="getComponentClass(user.format)"
            >In-person</span
          >
          <span
            *ngSwithCase="'Online'"
            [ngClass]="getComponentClass(user.format)"
            >Online</span
          >
          <span *ngSwitchDefault [ngClass]="getComponentClass(user.format)"
            >TBD</span
          >
        </span>
      </li>
      <ul></ul>
    </ul>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
      .default {
        padding: 5px 10px;
        background-color: red;
        border-radius:5px;
      }
      .InPerson {
        padding: 5px 10px;
        background-color: yellow;
        border-radius:5px;
      }
      .Online {
        padding: 5px 10px;
        background-color: green;
        border-radius:5px;
      }
      .card{
        list-style-type:none;
        margin:5px;
        border-radius:5px;
        background-color: #22BB99;
        padding: 5px 10px 10px 10px; 
      }
    `
  ]
})
export class HelloComponent {
  @Input() users;
  getComponentClass(format) {
    if (!format) {
      return 'default';
    }
    return format;
  }
}
