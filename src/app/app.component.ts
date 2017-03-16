import { Component } from '@angular/core';


@Component({ //decorator
  selector: 'app-root', // you could put '#app-root' or <div id=app-root> and create a class that displays this div, you can also use on classes
  template: `
    <h1>Root Component</h1>
  <fa-databinding></fa-databinding>
  <app-lifecycle *ngIf="!delete" [bindable]="boundValue">
      <p #boundContent>{{test}}</p> 
  </app-lifecycle>
  <button (click)="delete = true">Click to Delete</button>
  <button (click)="test = 'changed value'">Click to Change Content</button>
  <button (click)="boundValue = 2000">Click to Change Binding</button>
  `
})
export class AppComponent {
  title = 'I changed this man!';
  delete = false;
  test = "Starting Value"
  boundValue = 1000;
}