import {Component, Input} from '@angular/core';
import {Dropdown} from "../../../../../models/cells/form-entries/dropdown";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() dropdown: Dropdown = new Dropdown('id', []);
}
