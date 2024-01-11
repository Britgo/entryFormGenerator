import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Dropdown, Option} from "../../../../../models/cells/form-entries/dropdown";

@Component({
  selector: 'app-dropdown-editing',
  templateUrl: './dropdown-editing.component.html',
  styleUrls: ['./dropdown-editing.component.css', '../../../../editor.component.css']
})
export class DropdownEditingComponent {
  @Input() dropdown: Dropdown = new Dropdown('id', [new Option('OPTION 1')], 'TOOLTIP')

  @Output() id_change = new EventEmitter<string>()

  onIdChange() {
    this.id_change.emit(this.dropdown.id);
  }
}
