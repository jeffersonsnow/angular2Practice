import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-databinding',
  template: `
   <input type="text" [(ngModel)]="person.name">
   <input type="text" [(ngModel)]="person.name">
  `
})
export class TwoWayDatabindingComponent {
  person = {
    name: 'Jeff',
    age: 32
  };

}
