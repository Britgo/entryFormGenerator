import {FormEntry} from "./form.entry";

export class TextArea extends FormEntry {
  constructor(private input_id: string,
              private input_name: string,
              private id: string,
              public placeholder: string,
              public description: string,
              public rows: number = 3,
              public columns: number = 30,
              public maxlength: number = 105,
              public name: string = 'NOTE',
              public margin_top: string | null = '0.7em',
              public margin_bottom: string | null = '0.0em',
              public padding_left: string | null = '0.5em',
              public width: string | null = '100%',
              public resize: string | null = 'none') {
    super();
  }

  override getHTMLCode(): string {
    // Text area is formed by two inputs. I do not know what the first does but the second is the text area.
    // TODO figure out what the first input is used for.
    let HTMLCode =  `
                <input id = "`+this.input_id+`"
                       name="`+this.input_name+`"
                       type="hidden"
                       value="nomail">
                <textarea id="`+this.id+`"
                          name="`+this.name+`"
                          rows="`+this.rows+`"
                          cols="`+this.columns+`"
                          maxlength="`+this.maxlength+`"
                          autocomplete="off"
                          placeholder="`+this.placeholder+`"
                          title="`+this.description+`"`;
    // Add style.
    if (this.isStyleSpecified()) {
      HTMLCode = HTMLCode + `
                          style="`;
      if (this.margin_top !== null) {
        HTMLCode = HTMLCode + `
                                 margin-top:`+this.margin_top + `;`;
      }

      if (this.margin_bottom !== null) {
        HTMLCode = HTMLCode + `
                                 margin-bottom:`+this.margin_bottom + `;`;
      }

      if (this.padding_left !== null) {
        HTMLCode = HTMLCode + `
                                 padding-left:`+this.padding_left + `;`;
      }

      if (this.width !== null) {
        HTMLCode = HTMLCode + `
                                 width:`+this.width + `;`;
      }

      if (this.resize !== null) {
        HTMLCode = HTMLCode + `
                                 resize:`+this.resize + `;`;
      }

      HTMLCode = HTMLCode + `"`;
    }


    HTMLCode = HTMLCode + `>

                </textarea>`;
    return HTMLCode;
  }

  getStyle() {
    let style: {
      'margin-top'?: string,
      'margin-bottom'?: string,
      'padding-left'?: string,
      'width'?: string,
      'resize'?: string
    } = {}

    if (this.margin_top !== null) { style['margin-top'] = this.margin_top; }
    if (this.margin_bottom !== null) { style['margin-bottom'] = this.margin_bottom; }
    if (this.padding_left !== null) { style['padding-left'] = this.padding_left; }
    if (this.width !== null) { style['width'] = this.width; }
    if (this.resize !== null) { style['resize'] = this.resize }
    return style;
  }

  private isStyleSpecified() {
    return this.margin_top !== null || this.margin_bottom !== null || this.padding_left !== null || this.width !== null || this.resize !== null;
  }
}
