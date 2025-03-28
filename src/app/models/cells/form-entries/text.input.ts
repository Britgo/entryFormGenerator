import {FormEntry} from "./form.entry";

export class TextInput extends FormEntry {
  constructor(id: string,
              public name: string = '',
              public placeholder: string = '',
              public description: string = '',
              public autocomplete: 'off' | 'on' = 'off',
              public value: string = '',
              public width: string | null = '5.0em',
              public maxlength: number | null = null,
              private onkeyup: string | null = null,
              public margin_top: string | null = null,
              immutable: boolean = false,
              required: boolean = false) {
    super(id, immutable, required);
  }

  override getHTMLCode(): string {
    let HTMLCode = `
                     <input id="`+this.id+`"
                            autocomplete="`+this.autocomplete+`"
                            placeholder="`+this.placeholder+`"
                            title="`+this.description+`"
                            type="text"
                            value="`+this.value+`"`;

    // If the input is required then we add the required class to it.
    if (this.required) {
      HTMLCode = HTMLCode + ` class="required-form-entry"`
    }

    // Maybe there is a name.
    if (this.name !== '') {
      HTMLCode = HTMLCode + `
                            name="`+this.getHTMLName()+`"`;
    }

    // Maybe there is a max length.
    if (this.maxlength !== null) {
      HTMLCode = HTMLCode + `
                            maxlength="`+this.maxlength+`"`;
    }

    // Maybe there is a keyup event.
    if (this.onkeyup !== null) {
      HTMLCode = HTMLCode + `
                            onkeyup="`+this.onkeyup+`"`;
    }

    // Add style if any.
    if (this.isStyleSpecified()) {
      HTMLCode = HTMLCode + `
                            style="`;
      if (this.width !== null) {
        HTMLCode = HTMLCode + `
                                   width: ` + this.width + `;`;
      }

      if (this.margin_top !== null) {
        HTMLCode = HTMLCode + `
                                   margin-top: ` + this.margin_top + `;`;
      }

      HTMLCode = HTMLCode + `"`;
    }

    // Close the brackets.
    return HTMLCode + `>`;
  }

  getStyle() {
    let style: { 'width'?: string, 'margin-top'?: string } = {}
    if (this.width !== null) { style['width'] = this.width; }
    if (this.margin_top !== null) { style['margin-top'] = this.margin_top; }
    return style;
  }

  private isStyleSpecified() {
    return this.width !== null || this.margin_top !== null;
  }

  private getHTMLName() {
    if (this.immutable) {
      return this.name;
    }
    return "EXT-T-" + this.name;
  }
}
