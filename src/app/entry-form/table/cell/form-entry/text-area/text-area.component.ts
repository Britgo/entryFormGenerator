import {Component, Input} from '@angular/core';
import {TextArea} from "../../../../../models/cells/form-entries/text.area";

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
                                              'description')
}
