import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {EmptyCell, FormCell} from "../../../models/cells/cell";
import {
  ALIGN_OPTIONS,
  MAT_TOOLTIP_POSITION,
  MAT_TOOLTIP_SHOW_DELAY,
  SIZE_UNITS
} from "../../../models/constants";
import {TooltipPosition} from "@angular/material/tooltip";
import {Dropdown, Option} from "../../../models/cells/form-entries/dropdown";
import {InfoImage} from "../../../models/cells/form-entries/info.image";

@Component({
  selector: 'app-cell-editing',
  templateUrl: './cell-editing.component.html',
  styleUrls: ['./cell-editing.component.css', '../../editor.component.css', '../form-editing.component.css']
})
export class CellEditingComponent implements OnChanges{
  @Input() cell: FormCell | EmptyCell = new EmptyCell();

  colspan :number = this.getColSpan();
  width_size :string = this.getWidthSize();
  width_unit :string = this.getWidthUnit();

  protected readonly POSITION: TooltipPosition = MAT_TOOLTIP_POSITION;
  protected readonly SHOW_DELAY = MAT_TOOLTIP_SHOW_DELAY;
  protected readonly SIZE_UNITS = SIZE_UNITS;
  protected readonly ALIGN_OPTIONS = ALIGN_OPTIONS;

  resetValuesFromCell() {
    this.colspan = this.getColSpan();
    this.width_size = this.getWidthSize();
    this.width_unit = this.getWidthUnit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cell'].firstChange) {
      this.resetValuesFromCell();
    } else if (changes['cell'].previousValue !== changes['cell'].currentValue) {
      this.resetValuesFromCell();
    }
  }

  isEmptyCell() {
    return this.cell instanceof EmptyCell;
  }

  getFormCell() {
    if (this.cell instanceof FormCell) { return this.cell }
    return new FormCell('NAME', new Dropdown('id', [new Option('OPTION 1')]), null);
  }

  private getWidthSize() {
    if (this.cell.width === null || this.cell.width === '') {
      return '';
    }
    return parseFloat(this.cell.width).toString();
  }

  private getWidthUnit() {
    if (this.cell.width === null) {
      return '%';
    } else {
      let unit: string = this.cell.width;
      for (let char of '0123456789.') {
        unit = unit.replaceAll(char, '');
      }
      return unit;
    }
  }

  updateColspan() {
    if (this.colspan <= 0) {
      this.cell.colspan = null;
    } else {
      this.cell.colspan = this.colspan;
    }
  }

  updateWidth() {
    if (this.width_size === '') {
      this.cell.width = null;
    } else {
      this.cell.width = parseFloat(this.width_size).toString() + this.width_unit;
    }
  }

  onUnitChange(new_unit: string) {
    this.width_unit = new_unit;
    this.updateWidth();
  }

  private getColSpan() {
    return this.cell.colspan === null? 1: this.cell.colspan;
  }

  onAlignmentChange(alignment: string) {
    if (alignment !== 'left' && alignment !== 'right' && alignment !== 'center') {
      this.cell.text_align = 'left';
    } else {
      this.cell.text_align = alignment;
    }
  }

  addInformationIcon() {
    const non_empty_cell = this.getFormCell();
    non_empty_cell.info_image = new InfoImage(non_empty_cell.form_entry.id + 'icon', '');
  }

  removeInformationIcon() {
    this.getFormCell().info_image = null;
  }

  onIdChange(id: string) {
    this.getFormCell().getInfoImage().id = id + 'icon';
  }
}
