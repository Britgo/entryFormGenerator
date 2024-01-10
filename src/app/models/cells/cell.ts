import {FormEntry} from "./form-entries/form.entry";

export class Cell {
  constructor(public colspan: number | null = null,
              public width: string | null = null,
              public text_align: 'left' | 'right' | 'center' = 'left',
              public editing: boolean = false) {
  }

  getHTMLCode(): string {
    return `
            <td></td>`;
  }

  exitEditMode() {
    this.editing = false;
  }

  isInEditMode(): boolean {
    return this.editing;
  }

  getComponentWithDefault(): FormEntry | null {
    return null;
  }

  getSetupJavascriptCode(): string {
    let component = this.getComponentWithDefault();
    if (component === null) {
      return '';
    }
    return '';
  }

  getCellOpenHTMLCode(): string {
    // Start by opening the cell.
    let HTMLCode = `
            <td`;
    // Might need to specify the colspan
    if (this.colspan !== null) {
      HTMLCode = HTMLCode + ' colspan="' + this.colspan.toString() + '"';
    }

    // specify text alignment.
    HTMLCode = HTMLCode + ' style="text-align: ' + this.text_align;

    // Might need to specify the width
    if (this.width !== null) {
      HTMLCode = HTMLCode + ' width: ' + this.width;
    }
    return HTMLCode + '">';
  }

  getCellCloseHTMLCode(): string {
    return `
            </td>`;
  }

  getColspan(): number {
    if (this.colspan === null) {
      return 1;
    }
    return this.colspan;
  }

  getStyle(edit_mode: boolean = false) {
    let style: {'text-align': string, 'width'?: string, 'border'?: string} = {
      'text-align': this.text_align,
    };
    if (this.width !== null) {
      style['width'] = this.width;
    }

    if (this.isInEditMode() && edit_mode) {
      style['border'] = '1px solid #ff0000'
    }
    return style;
  }

  getDescription() {
    return "";
  }
}

export class EmptyCell extends Cell {
  constructor(colspan: number | null = null,
              width: string | null = null) {
    super(colspan, width);
  }

  override getHTMLCode(): string {
    let HTMLCode = `            <td`;
    if (this.colspan !== null) {
      HTMLCode = HTMLCode + ` colspan="2"`;
    }
    if (this.width !== null) {
      HTMLCode = HTMLCode + ` style="width: ` + this.width + `"`;
    }

    HTMLCode = HTMLCode + '>';
    HTMLCode = HTMLCode + '<span style="visibility: hidden;">empty cell</span></td>';
    return HTMLCode
  }
}
