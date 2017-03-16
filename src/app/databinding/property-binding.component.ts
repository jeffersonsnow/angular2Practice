import { Component, Input } from '@angular/core';

@Component({
  selector: 'fa-property-binding',
  template: `
    {{result}}  
  `,
  styles: []
})
export class PropertyBindingComponent {
  @ Input() result: number = 0; //with the metadata tag, this value can be bindable from outside the component.

}
