import { Component } from '@angular/core';

import { SelectValue } from '../simplengui/selectvalue';
import { KSelect } from '../simplengui/kselect';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {
	nameInput : string = '';
	selectData : Array<SelectValue>;

	constructor() {
		this.selectData = new Array<SelectValue>(1);
		var temp : SelectValue = new SelectValue();
		temp.label = 'test';
		temp.value = 'test';
		this.selectData[0] =temp;
	}

	log() {
		console.log(this.nameInput);
	}
}
