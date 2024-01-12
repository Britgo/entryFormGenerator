import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DEFAULT_TOUR_CONFIG, TourConfig} from "../../models/tour.config";

@Component({
  selector: 'app-tournament-director-email',
  templateUrl: './tournament-director-email.component.html',
  styleUrls: ['./tournament-director-email.component.css', '../editor.component.css']
})
export class TournamentDirectorEmailComponent {
  @Input() tour_config: TourConfig = DEFAULT_TOUR_CONFIG;

  @Output() prev_step = new EventEmitter<void>();
  @Output() next_step = new EventEmitter<void>();
  @Output() td_email_change = new EventEmitter<string>();

  onNextClick() {
    if (this.tour_config.td_email === '') {
      alert('Tournament director email must be specified.');
    } else {
      this.next_step.emit()
    }
  }
}
