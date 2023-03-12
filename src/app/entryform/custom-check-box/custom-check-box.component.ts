import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-custom-check-box',
  templateUrl: './custom-check-box.component.html',
  styleUrls: ['./custom-check-box.component.css', '../entry-form.component.css']
})
export class CustomCheckBoxComponent {
  @Input() title: string = '';
  @Input() name: string = '';
  @Input() checked: boolean = true;
  @Output() showInfo = new EventEmitter<string>;
}
