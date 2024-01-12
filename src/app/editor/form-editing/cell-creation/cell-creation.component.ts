import {Component, EventEmitter, Input, Output} from '@angular/core';
import {v4 as uuid} from 'uuid';

import {Cell, EmptyCell} from "../../../models/cells/cell";
import {CUSTOM_BLOCK} from "../../../models/custom.block";
import {OneLineCell, OneLineCheckbox, OneLineDropdown, OneLineInput} from "../../../models/cells/one.line.cell";
import {TwoLineDropdown, TwoLineInput, TwoLinesCell} from "../../../models/cells/two.lines.cell";
import {ALL_DEFAULT_CUSTOM_CELLS} from "../../../models/cells/default-cells/custom-block/all.default.custom.cells";
import {TextInput} from "../../../models/cells/form-entries/text.input";
import {InfoImage} from "../../../models/cells/form-entries/info.image";
import {Dropdown, Option} from "../../../models/cells/form-entries/dropdown";
import {Checkbox} from "../../../models/cells/form-entries/checkbox";

@Component({
  selector: 'app-cell-creation',
  templateUrl: './cell-creation.component.html',
  styleUrls: ['./cell-creation.component.css', '../../editor.component.css']
})
export class CellCreationComponent {
  @Input() custom_block = CUSTOM_BLOCK;

  @Output() create_cell = new EventEmitter<Cell>();
  @Output() back = new EventEmitter<void>();

  pre_made_cell_mode: boolean = false;
  one_line_cell_mode: boolean = true;
  two_lines_cell_mode: boolean = false;

  createEmptyCell() {
    this.create_cell.emit(new EmptyCell())
  }

  deselectAll() {
    this.pre_made_cell_mode = false;
    this.one_line_cell_mode = false;
    this.two_lines_cell_mode = false;
  }

  enterPreMadeCellMode() {
    this.deselectAll();
    this.pre_made_cell_mode = true;
  }

  enterOneLineCellMode() {
    this.deselectAll();
    this.one_line_cell_mode = true;
  }

  enterTwoLinesCellMode() {
    this.deselectAll();
    this.two_lines_cell_mode = true;
  }

  getButtonClass(selected: boolean) {
    return {
      'in-control': true,
      'tf_larger': true,
      'selected': selected
    };
  }

  getPreMadeCells() :Cell[] {
    const output: Cell[] = [];
    const all_custom_cells: Cell[] = this.custom_block.getAllCells();
    for (let cell of ALL_DEFAULT_CUSTOM_CELLS) {
      if (!all_custom_cells.includes(cell)) {
        output.push(cell);
      }
    }
    return output;
  }

  preMadeCellsExist() :boolean {
    return this.getPreMadeCells().length !== 0;
  }

  getOneLineCells() :OneLineCell[] {
    const input_id = uuid();
    const checkbox_id = uuid();
    return [
      new OneLineInput(
        'Text input',
        new TextInput(input_id),
        new InfoImage(input_id+'icon', 'DESCRIPTION')
      ),
      new OneLineDropdown(
        'Dropdown',
        new Dropdown(uuid(), [new Option('OPTION 1', true)]),
        null
      ),
      new OneLineCheckbox(
        'Checkbox',
        new Checkbox(checkbox_id, 'Checkbox', false,),
        new InfoImage(checkbox_id+'icon', 'DESCRIPTION')
      ),
    ];
  }

  getTwoLinesCells() :TwoLinesCell[] {
    return [
      new TwoLineInput(
        'Text input',
        new TextInput(uuid()), new InfoImage(uuid(), 'DESCRIPTION')
      ),
      new TwoLineDropdown(
        'Dropdown',
        new Dropdown(uuid(), [new Option('OPTION 1', true)]),
        null
      ),
    ];
  }

  onCellSelect(cell: Cell) {
    this.create_cell.emit(cell);
  }
}
