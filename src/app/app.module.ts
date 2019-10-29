import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './shared/material.module';
import { AppComponent } from './app.component';
import { SolutionComponent } from './solution/solution.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SolutionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
