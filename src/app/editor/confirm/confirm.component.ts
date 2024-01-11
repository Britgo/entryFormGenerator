import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DEFAULT_TOUR_CONFIG, TourConfig} from "../../models/tour.config";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
  @Input() tour_config: TourConfig = DEFAULT_TOUR_CONFIG;

  @Output() prev_step = new EventEmitter<void>();
  @Output() finish = new EventEmitter<void>();
}
