import {Component, Input} from '@angular/core';
import {TextArea} from "../../../../../models/cells/form-entries/text.area";
import {MAT_TOOLTIP_POSITION, MAT_TOOLTIP_SHOW_DELAY} from "../../../../../models/constants";
import {TooltipPosition} from "@angular/material/tooltip";

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {
  @Input() text_area: TextArea = new TextArea('input_id',
                                              'input_name',
                                              'id',
                                              'placeholder',
                                              'description');
  @Input() edit_mode: boolean = true

  POSITION: TooltipPosition = MAT_TOOLTIP_POSITION;
  SHOW_DELAY: number = MAT_TOOLTIP_SHOW_DELAY;
}
