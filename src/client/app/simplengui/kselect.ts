import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SelectValue } from './selectvalue';

@Component({
  selector: 'kselect',
  template: `
    <ul>
      <li *ngFor="let option of options" (click)="itemClicked(option.value)">
        {{ option.label }}
      </li>
    </ul>
    `
})
export class KSelect {

  @Input() options : Array<SelectValue>;

  itemClicked(value:string) {
    console.log(value);
  }

}