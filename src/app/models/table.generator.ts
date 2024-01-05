import {Cell, EmptyCell} from "./cells/cell";

export class Row {
  constructor(public cells: Cell[]) {}

  addCell(cell: Cell, position: number = -1): void {
    // Push in the last position if position is not satisfied.
    if (position === -1) {
      this.cells.push(cell);
      return;
    }

    this.cells.splice(position, 0, cell);
    return;
  }

  removeCell(position: number): void {
    // Remove an element in the array.
    this.cells.splice(position, 1);
    return;
  }

  getHTMLCode(): string {
    // Start by opening the table and fieldset.
    let HTMLCode = `
        <tr>`
    // Get the HTML code for every row.
    for (let cell of this.cells) {
      HTMLCode = HTMLCode + cell.getHTMLCode();
    }

    // Close table and fieldset.
    HTMLCode = HTMLCode + `
        </tr>`;
    return HTMLCode;
  }
}

export class EmptyRow extends Row {
  constructor(columns: number = 2) {
    super([new EmptyCell(columns)]);
  }

  override addCell(cell: Cell, position: number = -1): void { return; }

  override removeCell(position: number): void { return; }
}

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
}
