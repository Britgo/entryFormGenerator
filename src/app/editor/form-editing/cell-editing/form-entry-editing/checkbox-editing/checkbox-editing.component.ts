import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Checkbox} from "../../../../../models/cells/form-entries/checkbox";
import {MAT_TOOLTIP_POSITION, MAT_TOOLTIP_SHOW_DELAY} from "../../../../../models/constants";
import {sanitizeString} from "../../../../../models/string.formatting";

@Component({
  selector: 'app-checkbox-editing',
  templateUrl: './checkbox-editing.component.html',
  styleUrls: ['./checkbox-editing.component.css', '../../../../editor.component.css']
})
export class CheckboxEditingComponent {
  @Input() checkbox: Checkbox = new Checkbox('id', 'NAME', true)

  @Output() id_change = new EventEmitter<string>()

  protected readonly POSITION = MAT_TOOLTIP_POSITION;
  protected readonly SHOW_DELAY = MAT_TOOLTIP_SHOW_DELAY;

  onIdChange() {
    this.checkbox.id = sanitizeString(this.checkbox.id);
    this.id_change.emit(this.checkbox.id);
  }

  onNameChange() {
    this.checkbox.name = sanitizeString(this.checkbox.name, '-').toUpperCase();
  }
}
