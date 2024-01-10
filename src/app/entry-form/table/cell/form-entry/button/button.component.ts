import {Component, Input} from '@angular/core';import {Button} from "../../../../../models/cells/form-entries/button";
import {MAT_TOOLTIP_POSITION_AT_ORIGIN, MAT_TOOLTIP_SHOW_DELAY} from "../../../../../models/constants";

  @Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
    @Input() button: Button = new Button('id', 'value', 'description');
    POSITION_AT_ORIGIN: boolean = MAT_TOOLTIP_POSITION_AT_ORIGIN;
    SHOW_DELAY: number = MAT_TOOLTIP_SHOW_DELAY;
}
