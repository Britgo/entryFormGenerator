import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OneLineCell} from "../../../../models/cells/one.line.cell";
import {Checkbox} from "../../../../models/cells/form-entries/checkbox";

@Component({
  selector: 'app-one-line-cell',
  templateUrl: './one-line-cell.component.html',
  styleUrls: ['./one-line-cell.component.css']
})
export class OneLineCellComponent {
  @Input() one_line_cell: OneLineCell = new OneLineCell('two lines cell',
                                                         new Checkbox('id', 'checkbox', false),
                                                        null)
  @Output() on_cell_describe = new EventEmitter<void>();

  processInfoImageClick() {
    this.on_cell_describe.emit();
  }
}
