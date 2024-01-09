import {Component, Input} from '@angular/core';
import {FormEntry} from "../../../../models/cells/form-entries/form.entry";
import {Button} from "../../../../models/cells/form-entries/button";
import {Checkbox} from "../../../../models/cells/form-entries/checkbox";
import {Dropdown} from "../../../../models/cells/form-entries/dropdown";
import {TextArea} from "../../../../models/cells/form-entries/text.area";
import {TextInput} from "../../../../models/cells/form-entries/text.input";

@Component({
  selector: 'app-form-entry',
  templateUrl: './form-entry.component.html',
  styleUrls: ['./form-entry.component.css']
})
export class FormEntryComponent {
  @Input() form_entry = new FormEntry();

  isButton(): boolean { return this.form_entry instanceof Button; }
  isCheckbox(): boolean { return this.form_entry instanceof Checkbox; }
  isDropdown(): boolean { return this.form_entry instanceof Dropdown; }
  isTextArea(): boolean { return this.form_entry instanceof TextArea; }
  isTextInput(): boolean { return this.form_entry instanceof TextInput; }

  getButton(): Button {
    if (this.form_entry instanceof Button) { return this.form_entry; }
    return new Button('id', 'value', 'description');
  }
  getCheckbox(): Checkbox {
    if (this.form_entry instanceof Checkbox) { return this.form_entry; }
    return new Checkbox('id', 'name', false);
  }
  getDropdown(): Dropdown {
    if (this.form_entry instanceof Dropdown) { return this.form_entry; }
    return new Dropdown('id', []);
  }
  getTextArea(): TextArea {
    if (this.form_entry instanceof TextArea) { return this.form_entry; }
    return new TextArea('input_id', 'input_name', 'id', 'placeholder', 'description');
  }
  getTextInput(): TextInput {
    if (this.form_entry instanceof TextInput) { return this.form_entry; }
    return new TextInput('id');
  }
}
