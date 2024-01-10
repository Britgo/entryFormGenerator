import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from "@angular/material/tooltip";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IgxInputGroupModule } from 'igniteui-angular';
import { TableComponent } from './entry-form/table/table.component';
import { CellComponent } from './entry-form/table/cell/cell.component';
import { TwoLinesCellComponent } from './entry-form/table/cell/two-lines-cell/two-lines-cell.component';
import { OneLineCellComponent } from './entry-form/table/cell/one-line-cell/one-line-cell.component';
import { EmptyCellComponent } from './entry-form/table/cell/empty-cell/empty-cell.component';
import { FormEntryComponent } from './entry-form/table/cell/form-entry/form-entry.component';
import { InfoImageComponent } from './entry-form/table/cell/info-image/info-image.component';
import { ButtonComponent } from './entry-form/table/cell/form-entry/button/button.component';
import { CheckboxComponent } from './entry-form/table/cell/form-entry/checkbox/checkbox.component';
import { DropdownComponent } from './entry-form/table/cell/form-entry/dropdown/dropdown.component';
import { TextAreaComponent } from './entry-form/table/cell/form-entry/text-area/text-area.component';
import { TextInputComponent } from './entry-form/table/cell/form-entry/text-input/text-input.component';
import { FormEditingComponent } from './editor/form-editing/form-editing.component';
import { TournamentNameComponent } from './editor/tournament-name/tournament-name.component';
import { TournamentTitleComponent } from './editor/tournament-title/tournament-title.component';
import { TournamentDirectorComponent } from './editor/tournament-director/tournament-director.component';
import { TournamentDirectorEmailComponent } from './editor/tournament-director-email/tournament-director-email.component';
import { DrawMasterEmailComponent } from './editor/draw-master-email/draw-master-email.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    EntryFormComponent,
    TableComponent,
    CellComponent,
    TwoLinesCellComponent,
    OneLineCellComponent,
    EmptyCellComponent,
    FormEntryComponent,
    InfoImageComponent,
    ButtonComponent,
    CheckboxComponent,
    DropdownComponent,
    TextAreaComponent,
    TextInputComponent,
    FormEditingComponent,
    TournamentNameComponent,
    TournamentTitleComponent,
    TournamentDirectorComponent,
    TournamentDirectorEmailComponent,
    DrawMasterEmailComponent,
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
