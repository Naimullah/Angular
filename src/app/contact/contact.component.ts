import { Component } from '@angular/core';
@Component({
  selector: 'app-contact',
  template: `
  <h1>{{message}}</h1>
    <input type="number" [(ngModel)]='num1' />
    <input type="number" [(ngModel)]='num2' />
    <button (click)="add()">Click</button>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  message:string="welcome to";
  num1: number;
  num2: number;
  res: number;
add(){
  this.res=this.num1 + this.num2;
  alert(this.res);
}
}
