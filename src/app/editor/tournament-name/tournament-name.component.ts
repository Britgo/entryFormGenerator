import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DEFAULT_TOUR_CONFIG, TourConfig} from "../../models/tour.config";

@Component({
  selector: 'app-tournament-name',
  templateUrl: './tournament-name.component.html',
  styleUrls: ['./tournament-name.component.css', '../editor.component.css']
})
export class TournamentNameComponent {
  @Input() tour_config: TourConfig = DEFAULT_TOUR_CONFIG;

  @Output() prev_step = new EventEmitter<void>();
  @Output() next_step = new EventEmitter<void>();
  @Output() tour_name_change = new EventEmitter<string>();

  onNextStep() {
    if (this.tour_config.getTourDirector() === '') {
      alert('Tournament name must be specified.');
    } else {
      this.next_step.emit()
    }
  }
}
