import {Cell} from "./cells/cell";
import {CellPosition, getPositiveResidue} from "./cell.position";
import {throwError} from "rxjs";
import {Row} from "./row";

export class TableGenerator {
  constructor(public rows: Row[], public width: string = '100%') {}

  addRow(row: Row, position: number = -1): void {
    // Push in the last position if position is not satisfied.
    if (position === -1) {
      this.rows.push(row);
      return;
    }

    this.rows.splice(position, 0, row);
    return;
  }

  removeRow(position: number): void {
    // Remove an element in the array.
    this.rows.splice(position, 1);
    return;
  }

  getRow(position: number): Row {
    // Get the requested row.
    return this.rows[getPositiveResidue(position, this.getNRows())];
  }

  addCell(cell: Cell, position: CellPosition): void {
    if (position.isNull()) {
      return;
    }

    const row = this.getRow(position.getRowIndex(this.getNRows()))
    row.addCell(cell, position.getCellIndex(row.getNCells()));
    return;
  }

  removeCell(position: CellPosition): void {
    if (position.isNull()) {
      return;
    }

    // Get appropriate row and remove the cell from there.
    const row_index: number = position.getRowIndex(this.getNRows());
    const row = this.getRow(row_index);
    row.removeCell(position.getCellIndex(row.getNCells()));

    // If there are no cells left in the row then we remove the row too.
    if (row.isEmpty()) {
      this.removeRow(row_index);
    }
    return;
  }

  getCell(position: CellPosition): Cell {
    if (position.isNull()) {
      throwError(() => new Error('position should not be null to get cell.'));
    }

    const row = this.getRow(position.getRowIndex(this.getNRows()));
    return row.getCell(position.getCellIndex(row.getNCells()));
  }

  exitEditMode() {
    for (let row of this.rows) {
      row.exitEditMode();
    }
  }

  isInEditMode(): boolean {
    for (let row of this.rows) {
      if (row.isInEditMode()) {
        return true;
      }
    }
    return false;
  }

  getAllCells(): Cell[] {
    let cells: Cell[] = [];
    for (let row of this.rows) {
      for (let cell of row.cells) {
        cells.push(cell);
      }
    }
    return cells;
  }

  getHTMLCode(): string {
    // Start by opening the table and fieldset.
    let HTMLCode = `<fieldset class="bk-fields">
    <table style="width:`+this.width+`">
`
    // Get the HTML code for every row.
    for (let row of this.rows) {
      HTMLCode = HTMLCode + row.getHTMLCode();
    }

    // Close table and fieldset.
    HTMLCode = HTMLCode + `    </table>
</fieldset>
`;
    return HTMLCode;
  }

  getNRows() {
    return this.rows.length;
  }
}
