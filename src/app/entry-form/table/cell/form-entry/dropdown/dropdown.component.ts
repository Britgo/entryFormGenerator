import {Component, Input} from '@angular/core';
import {Dropdown} from "../../../../../models/cells/form-entries/dropdown";
import {MAT_TOOLTIP_POSITION, MAT_TOOLTIP_SHOW_DELAY} from "../../../../../models/constants";
import {TooltipPosition} from "@angular/material/tooltip";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() dropdown: Dropdown = new Dropdown('id', []);
  @Input() edit_mode: boolean = true

  POSITION: TooltipPosition = MAT_TOOLTIP_POSITION;
  SHOW_DELAY: number = MAT_TOOLTIP_SHOW_DELAY;
}
