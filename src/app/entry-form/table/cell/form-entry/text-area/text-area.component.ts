import {Component, Input} from '@angular/core';
import {TextArea} from "../../../../../models/cells/form-entries/text.area";
import {MAT_TOOLTIP_POSITION_AT_ORIGIN, MAT_TOOLTIP_SHOW_DELAY} from "../../../../../models/constants";

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
  POSITION_AT_ORIGIN: boolean = MAT_TOOLTIP_POSITION_AT_ORIGIN;
  SHOW_DELAY: number = MAT_TOOLTIP_SHOW_DELAY;
}
