import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kinput',
  template: `
    <input #box (keyup)="onKey(box.value)">
    `
})
export class KInput {

	@Input() value : string = '';
	@Output() valueChange : EventEmitter<string> = new EventEmitter();

	onKey(value: string) {
		this.value = value;
    	this.valueChange.next(value);
  	}
}