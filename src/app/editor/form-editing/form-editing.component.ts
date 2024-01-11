import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableGenerator} from "../../models/table.generator";
import {CUSTOM_BLOCK} from "../../models/custom.block";
import {CellPosition} from "../../models/cell.position";

@Component({
  selector: 'app-form-editing',
  templateUrl: './form-editing.component.html',
  styleUrls: ['./form-editing.component.css', '../editor.component.css']
})
export class FormEditingComponent {
  @Input() edit_mode: boolean = true;
  @Input() custom_block: TableGenerator = CUSTOM_BLOCK;
  @Input() selected_cell: CellPosition = new CellPosition(null, null);

  @Output() prev_step = new EventEmitter<void>();
  @Output() next_step = new EventEmitter<void>();
  @Output() custom_block_change = new EventEmitter<TableGenerator>();
  @Output() edit_mode_change = new EventEmitter<boolean>();

  getEditModeButtonValue() {
    if (this.edit_mode) {
      return 'STOP EDITING';
    }
    return 'START EDITING';
  }

  toggleEditMode() {
    this.edit_mode = !this.edit_mode;
    this.edit_mode_change.emit(this.edit_mode);
  }

  onFinish() {
    this.edit_mode = false;
    this.edit_mode_change.emit(false);
    this.custom_block_change.emit(this.custom_block);
    this.next_step.emit()
  }
}
