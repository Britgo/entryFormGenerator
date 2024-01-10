import {Component} from '@angular/core';
import {TableGenerator} from "./models/table.generator";
import {EGD_SEARCH_BLOCK} from "./models/EGD.search.block";
import {CUSTOM_BLOCK} from "./models/custom.block";
import {PLAYER_EMAIL_BLOCK} from "./models/player.email.block";
import {CellPosition} from "./models/cell.position";
import {DEFAULT_TOUR_CONFIG, TourConfig} from "./models/tour.config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  egd_search_block: TableGenerator = EGD_SEARCH_BLOCK;
  custom_block: TableGenerator = CUSTOM_BLOCK;
  player_email_block: TableGenerator = PLAYER_EMAIL_BLOCK;
  tour_config: TourConfig = DEFAULT_TOUR_CONFIG;
  edit_mode: boolean = true;
  selected_cell: CellPosition = new CellPosition(null, null);

  processOnCellSelect(cellPosition: CellPosition) {
    this.selected_cell = cellPosition;
  }

  downloadDocuments() {
    // TODO implement.
  }

  updateCustomBlock(custom_block: TableGenerator) {
    this.custom_block = custom_block;
  }

  updateTourConfig(tour_config: TourConfig) {
    this.tour_config = tour_config;
  }

  updateEditMode(edit_mode: boolean) {
    console.log('edit mode change app component');
    this.edit_mode = edit_mode;
    console.log(this.edit_mode);
  }
}
