import {Component, Input} from '@angular/core';
import {TextInput} from "../../../../../models/cells/form-entries/text.input";
import {MAT_TOOLTIP_POSITION_AT_ORIGIN, MAT_TOOLTIP_SHOW_DELAY} from "../../../../../models/constants";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  @Input() text_input: TextInput = new TextInput('id');
  POSITION_AT_ORIGIN: boolean = MAT_TOOLTIP_POSITION_AT_ORIGIN;
  SHOW_DELAY: number = MAT_TOOLTIP_SHOW_DELAY;
}
