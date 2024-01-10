import {Component, Input} from '@angular/core';
import {Dropdown} from "../../../../../models/cells/form-entries/dropdown";
import {MAT_TOOLTIP_POSITION_AT_ORIGIN, MAT_TOOLTIP_SHOW_DELAY} from "../../../../../models/constants";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() dropdown: Dropdown = new Dropdown('id', []);
  POSITION_AT_ORIGIN: boolean = MAT_TOOLTIP_POSITION_AT_ORIGIN;
  SHOW_DELAY: number = MAT_TOOLTIP_SHOW_DELAY;
}
