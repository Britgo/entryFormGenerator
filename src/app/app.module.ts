import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { EntryFormComponent } from './entryform/entry-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from "@angular/material/tooltip";
import { CustomRadioComponent } from './entryform/custom-radio/custom-radio.component';
import { CustomCheckBoxComponent } from './entryform/custom-check-box/custom-check-box.component';
import { CustomDropDownComponent } from './entryform/custom-drop-down/custom-drop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    EntryFormComponent,
    CustomRadioComponent,
    CustomCheckBoxComponent,
    CustomDropDownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
