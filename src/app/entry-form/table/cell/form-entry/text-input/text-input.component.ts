import {Component, Input} from '@angular/core';
import {TextInput} from "../../../../../models/cells/form-entries/text.input";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  @Input() form_entry: TextInput = new TextInput('id')
}
