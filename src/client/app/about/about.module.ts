import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';


import { KInput } from '../simplengui/kinput';

@NgModule({
    imports: [CommonModule],
    declarations: [AboutComponent,KInput],
    exports: [AboutComponent]
})

export class AboutModule { 
}
