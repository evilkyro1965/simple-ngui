import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';


import { KInput } from '../simplengui/kinput';
import { KSelect } from '../simplengui/kselect';

@NgModule({
    imports: [CommonModule],
    declarations: [AboutComponent,KInput,KSelect],
    exports: [AboutComponent]
})

export class AboutModule { 
}
