import {Component, Input} from '@angular/core';
import {Checkbox} from "../../../../../models/cells/form-entries/checkbox";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  @Input() checkbox: Checkbox = new Checkbox('id', 'name', false)

  toggleChecked() {
    this.checkbox.checked = !this.checkbox.checked;
  }
}
