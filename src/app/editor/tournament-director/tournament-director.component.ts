import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DEFAULT_TOUR_CONFIG, TourConfig} from "../../models/tour.config";

@Component({
  selector: 'app-tournament-director',
  templateUrl: './tournament-director.component.html',
  styleUrls: ['./tournament-director.component.css', '../editor.component.css']
})
export class TournamentDirectorComponent {
  @Input() tour_config: TourConfig = DEFAULT_TOUR_CONFIG;

  @Output() prev_step = new EventEmitter<void>();
  @Output() next_step = new EventEmitter<void>();
  @Output() tour_director_change = new EventEmitter<string>();

  onNextClick() {
    if (this.tour_config.getTourDirector() === '') {
      alert('Tournament director must be specified.');
    } else {
      this.next_step.emit()
    }
  }
}
