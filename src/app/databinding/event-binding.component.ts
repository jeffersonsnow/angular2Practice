import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
   <button (click)="onClicked()">Click Me!</button>
  `,
  styles: []
  //you could put an array here for for outputs: [] or inputs: [] and fill them with all the property names as strings. It's a better practice to use the @output and @input metatags
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>(); //you can do this without string but this lets you do generic or specific data types. @Output makes it so you can listen for this event outside the component. The output can be given string arguments to rename the output on the listening components.
  onClicked(){
    this.clicked.emit('It works!');
  }

}
