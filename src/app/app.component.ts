import { Component, ViewChild } from '@angular/core';
import { PostsComponent } from './posts/posts.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticeAngular';
  message:string="Message from Parent component to child component";
  @ViewChild(PostsComponent) childComp;
  constructor(){
    console.log(this.childComp);
  } 
 

}
