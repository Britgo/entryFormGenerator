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
import {FormsModule} from "@angular/forms";
import { RadioEditorComponent } from './editor/radio-editor/radio-editor.component';
import { CheckBoxEditorComponent } from './editor/check-box-editor/check-box-editor.component';
import { DropDownEditorComponent } from './editor/drop-down-editor/drop-down-editor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    EntryFormComponent,
    CustomRadioComponent,
    CustomCheckBoxComponent,
    CustomDropDownComponent,
    RadioEditorComponent,
    CheckBoxEditorComponent,
    DropDownEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
