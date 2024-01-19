import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Cell, EmptyCell} from "../../../models/cells/cell";
import {TwoLinesCell} from "../../../models/cells/two.lines.cell";
import {Checkbox} from "../../../models/cells/form-entries/checkbox";
import {OneLineCell} from "../../../models/cells/one.line.cell";
import {AnnouncementCell} from "../../../models/cells/announcement.cell";
import {Announcement} from "../../../models/cells/form-entries/announcement";

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() cell: Cell = new Cell();
  @Input() edit_mode: boolean = true;

  @Output() on_cell_describe = new EventEmitter<void>();

  isEmptyCell(): boolean {
    return this.cell instanceof EmptyCell;
  }

  isAnnouncementCell(): boolean {
    return this.cell instanceof AnnouncementCell;
  }

  isOneLineCell(): boolean {
    return this.cell instanceof OneLineCell;
  }

  isTwoLinesCell(): boolean {
    return this.cell instanceof TwoLinesCell;
  }

  getEmptyCell(): EmptyCell {
    if (this.cell instanceof EmptyCell) {
      return this.cell;
    }
    return new EmptyCell();
  }

  getAnnouncementCell(): AnnouncementCell {
    if (this.cell instanceof AnnouncementCell) {
      return this.cell;
    }
    return new AnnouncementCell(new Announcement(''));
  }

  getOneLineCell(): OneLineCell {
    if (this.cell instanceof OneLineCell) {
      return this.cell;
    }
    return new OneLineCell('two lines cell', new Checkbox('id', 'checkbox', false), null);
  }

  getTwoLinesCell(): TwoLinesCell {
    if (this.cell instanceof TwoLinesCell) {
      return this.cell;
    }
    return new TwoLinesCell('two lines cell', new Checkbox('id', 'checkbox', false), null);
  }

  processDescriptionChange() {
    this.on_cell_describe.emit();
  }
}
