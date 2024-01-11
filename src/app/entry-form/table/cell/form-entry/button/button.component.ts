import {Component, Input} from '@angular/core';import {Button} from "../../../../../models/cells/form-entries/button";
import {MAT_TOOLTIP_POSITION, MAT_TOOLTIP_SHOW_DELAY} from "../../../../../models/constants";
import {TooltipPosition} from "@angular/material/tooltip";

  @Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
    @Input() button: Button = new Button('id', 'value', 'description');
    @Input() edit_mode: boolean = true

    POSITION: TooltipPosition = MAT_TOOLTIP_POSITION;
    SHOW_DELAY: number = MAT_TOOLTIP_SHOW_DELAY;
  }
