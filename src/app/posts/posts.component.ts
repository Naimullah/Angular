import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
title:string ="List of Posts";
postMessage:string="Message from Post";
childMessage:string="Message from child component to the Parent component";
@Input() fromParent:string;
}
