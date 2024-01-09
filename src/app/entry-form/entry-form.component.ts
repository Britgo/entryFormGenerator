import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableGenerator} from "../models/table.generator";
import {EGD_SEARCH_BLOCK} from "../models/EGD.search.block";
import {CUSTOM_BLOCK} from "../models/custom.block";
import {PLAYER_EMAIL_BLOCK} from "../models/player.email.block";
import {CellPosition} from "../models/cell.position";


@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent {
  @Input() egd_search_block: TableGenerator = EGD_SEARCH_BLOCK;
  @Input() custom_block: TableGenerator = CUSTOM_BLOCK;
  @Input() player_email_block: TableGenerator = PLAYER_EMAIL_BLOCK;
  @Input() edit_mode: boolean = true
  @Output() on_cell_select = new EventEmitter<CellPosition>();

  DEFAULT_INFO_MESSAGE: string = `
Either hover or click
<br>
on an info icon <span class="icon-i-new"> i </span>
<br>
for help.`;
  info_message: string = '';


  setInfoMessage(message: string) {
    this.info_message = message;
  }

  processOnCellSelect(cellPosition: CellPosition) {
    this.on_cell_select.emit(cellPosition);
  }
}
