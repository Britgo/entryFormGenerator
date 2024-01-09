import {Component, Input} from '@angular/core';import {Button} from "../../../../../models/cells/form-entries/button";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() form_entry: Button = new Button('id', 'value', 'description')
}
