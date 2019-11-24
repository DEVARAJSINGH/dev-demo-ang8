import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatFormFieldModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DevInputComponent } from '../shared/directive/components/dev-input/dev-input.component';
import { DevComponent } from './dev/dev.component';
import { DirectiveModule } from 'src/shared/directive/directive.module';

@NgModule({
  declarations: [
    AppComponent,
    DevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    DirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
