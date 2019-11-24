import { NgModule } from "@angular/core";
import { DevInputComponent } from './components/dev-input/dev-input.component';
import { MatInput, MatInputModule, MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DevInputComponent,
    ],
    imports: [
        MatInputModule,
        MatFormFieldModule,
        FormsModule
    ]
})
export class DirectiveModule {
    
}