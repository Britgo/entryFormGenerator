import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule} from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IgxInputGroupModule } from 'igniteui-angular';
import { TableGeneratorComponent } from './entry-form/table-generator/table-generator.component';
import { TableComponent } from './entry-form/table/table.component';
import { RowComponent } from './entry-form/table/row/row.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    EntryFormComponent,
    TableGeneratorComponent,
    TableComponent,
    RowComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    FormsModule,
    FontAwesomeModule,
    IgxInputGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
