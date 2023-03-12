import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-custom-drop-down',
  templateUrl: './custom-drop-down.component.html',
  styleUrls: ['./custom-drop-down.component.css', '../entry-form.component.css']
})
export class CustomDropDownComponent {
  @Input() name: string = '';
  @Input() tooltip: string = '';
  @Input() title: string = '';
  @Input() options: string[] = ['option 1', 'option 2'];
  @Input() chosen: number = 0;
  @Output() showInfo = new EventEmitter<string>;
}
