import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormEntry} from "../../../../models/cells/form-entries/form.entry";
import {Checkbox} from "../../../../models/cells/form-entries/checkbox";
import {Dropdown} from "../../../../models/cells/form-entries/dropdown";
import {TextInput} from "../../../../models/cells/form-entries/text.input";
import {Announcement} from "../../../../models/cells/form-entries/announcement";

@Component({
  selector: 'app-form-entry-editing',
  templateUrl: './form-entry-editing.component.html',
  styleUrls: ['./form-entry-editing.component.css']
})
export class FormEntryEditingComponent {
  @Input() form_entry: FormEntry = new FormEntry('id');

  @Output() id_change = new EventEmitter<string>()

  isCheckbox(): boolean { return this.form_entry instanceof Checkbox; }
  isDropdown(): boolean { return this.form_entry instanceof Dropdown; }
  isTextInput(): boolean { return this.form_entry instanceof TextInput; }
  isAnnouncement(): boolean { return this.form_entry instanceof Announcement; }

  getCheckbox(): Checkbox {
    if (this.form_entry instanceof Checkbox) { return this.form_entry; }
    return new Checkbox('id', 'name', false);
  }
  getDropdown(): Dropdown {
    if (this.form_entry instanceof Dropdown) { return this.form_entry; }
    return new Dropdown('id', []);
  }
  getTextInput(): TextInput {
    if (this.form_entry instanceof TextInput) { return this.form_entry; }
    return new TextInput('id');
  }
  getAnnouncement(): Announcement {
    if (this.form_entry instanceof Announcement) { return this.form_entry; }
    return new Announcement('');
  }

  onIdChange(id: string) {
    this.id_change.emit(id);
  }
}
