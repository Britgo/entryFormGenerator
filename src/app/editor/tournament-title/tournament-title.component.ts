import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DEFAULT_TOUR_CONFIG, TourConfig} from "../../models/tour.config";

@Component({
  selector: 'app-tournament-title',
  templateUrl: './tournament-title.component.html',
  styleUrls: ['./tournament-title.component.css', '../editor.component.css']
})
export class TournamentTitleComponent {
  @Input() tour_config: TourConfig = DEFAULT_TOUR_CONFIG;

  @Output() prev_step = new EventEmitter<void>();
  @Output() next_step = new EventEmitter<void>();
  @Output() tour_title_change = new EventEmitter<string>();
}
