import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TwoLinesCell} from "../../../../models/cells/two.lines.cell";
import {Checkbox} from "../../../../models/cells/form-entries/checkbox";

@Component({
  selector: 'app-two-lines-cell',
  templateUrl: './two-lines-cell.component.html',
  styleUrls: ['./two-lines-cell.component.css']
})
export class TwoLinesCellComponent {
  @Input() two_lines_cell: TwoLinesCell = new TwoLinesCell('two lines cell',
                                                            new Checkbox('id', 'checkbox', false),
                                                           null);
  @Input() edit_mode: boolean = true;

  @Output() on_cell_describe = new EventEmitter<void>();

  processInfoImageClick() {
    this.on_cell_describe.emit();
  }
}
