import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DEFAULT_TOUR_CONFIG, TourConfig} from "../../models/tour.config";

@Component({
  selector: 'app-draw-master-email',
  templateUrl: './draw-master-email.component.html',
  styleUrls: ['./draw-master-email.component.css', '../editor.component.css']
})
export class DrawMasterEmailComponent {
  @Input() tour_config: TourConfig = DEFAULT_TOUR_CONFIG;

  @Output() prev_step = new EventEmitter<void>();
  @Output() next_step = new EventEmitter<void>();
  @Output() dm_email_change = new EventEmitter<string>();
}
