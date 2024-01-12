import {Component, Input} from '@angular/core';
import {TextInput} from "../../../../../models/cells/form-entries/text.input";
import {MAT_TOOLTIP_POSITION, MAT_TOOLTIP_SHOW_DELAY} from "../../../../../models/constants";
import {TooltipPosition} from "@angular/material/tooltip";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  @Input() text_input: TextInput = new TextInput('id');
  @Input() edit_mode: boolean = true

  POSITION: TooltipPosition = MAT_TOOLTIP_POSITION;
  SHOW_DELAY: number = MAT_TOOLTIP_SHOW_DELAY;
}
