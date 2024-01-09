import {Component} from '@angular/core';
import {TableGenerator} from "./models/table.generator";
import {EGD_SEARCH_BLOCK} from "./models/EGD.search.block";
import {CUSTOM_BLOCK} from "./models/custom.block";
import {PLAYER_EMAIL_BLOCK} from "./models/player.email.block";
import {CellPosition} from "./models/cell.position";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  egd_search_block: TableGenerator = EGD_SEARCH_BLOCK;
  custom_block: TableGenerator = CUSTOM_BLOCK;
  player_email_block: TableGenerator = PLAYER_EMAIL_BLOCK;
  edit_mode: boolean = true;
  selected_cell: CellPosition = new CellPosition(null, null);

  processOnCellSelect(cellPosition: CellPosition) {
    this.selected_cell = cellPosition;
  }
}
