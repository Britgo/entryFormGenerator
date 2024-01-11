import {throwError} from "rxjs";

export class CellPosition {

  constructor(private row_index: number | null,
              private cell_index: number | null,
              public is_new: boolean = false) {
  }

  getRowIndex(tot_rows: number | null = null): number {
    return this.getIndex(this.row_index, tot_rows);
  }

  getCellIndex(tot_cells: number | null = null): number {
    return this.getIndex(this.cell_index, tot_cells);
  }

  isNull() {
    return this.row_index === null || this.cell_index === null;
  }

  getPositionLeft() :CellPosition {
    if (this.isNull()) {
      throwError(() => Error('Cannot a position left of an empty position.'));
    }
    return new CellPosition(this.row_index, this.cell_index, false)
  }

  getPositionRight() :CellPosition {
    if (this.isNull()) {
      throwError(() => Error('Cannot a position right of an empty position.'));
    }
    return new CellPosition(this.row_index, this.getCellIndex() + 1, false)
  }

  getPositionAbove() :CellPosition {
    if (this.isNull()) {
      throwError(() => Error('Cannot a position above an empty position.'));
    }
    return new CellPosition(this.row_index, 0, true)
  }

  getPositionBelow() :CellPosition {
    if (this.isNull()) {
      throwError(() => Error('Cannot a position below an empty position.'));
    }
    return new CellPosition(this.getRowIndex() + 1, 0, true)}

  private getIndex(numerator: number | null, denominator: number | null): number {
    if (this.isNull()) {
      throwError(() => Error('Cannot get index if cell position is empty.'));
    }
    if (denominator !== null && numerator !== null) {
      return getPositiveResidue(numerator, denominator);
    }
    return numerator === null? -1: numerator;
  }
}

export function getPositiveResidue(numerator: number, denominator: number) {
  // Get the smallest non-negative number equivalent to numerator module the denominator.
  let residue = numerator % denominator;
  if (residue < 0) {
    residue = residue + denominator;
  }
  return residue;
}
