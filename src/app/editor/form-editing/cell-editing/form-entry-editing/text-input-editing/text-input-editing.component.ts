import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TextInput} from "../../../../../models/cells/form-entries/text.input";

@Component({
  selector: 'app-text-input-editing',
  templateUrl: './text-input-editing.component.html',
  styleUrls: ['./text-input-editing.component.css', '../../../../editor.component.css']
})
export class TextInputEditingComponent {
  @Input() text_input: TextInput = new TextInput('id');

  @Output() id_change = new EventEmitter<string>()

  onIdChange() {
    this.id_change.emit(this.text_input.id);
  }

}
