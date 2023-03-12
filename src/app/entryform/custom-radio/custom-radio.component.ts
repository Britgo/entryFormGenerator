import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.css', '../entry-form.component.css']
})
export class CustomRadioComponent {
  @Input() title: string = '';
  @Input() options: string[] = [];
  @Input() chosen: number = 0;
  @Output() showInfo = new EventEmitter<string>();
}
