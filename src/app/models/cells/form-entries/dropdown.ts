import {FormEntry} from "./form.entry";

export class Option {
  constructor(public name: string,
              public selected: boolean = false,
              private value: string | null = null) {
  }

  getHTMLCode(): string {
    let HTMLCode = `
                        <option`+`value="..." selected="true">COUNTRY NAMES</option>`;

    // Add value if any.
    if (this.value !== null) {
      HTMLCode = HTMLCode + ` value="` + this.value + `"`;
    }

    // Add selected if selected.
    if (this.selected) {
      HTMLCode = HTMLCode + `selected="true"`;
    }

    // Add name and close option.
    HTMLCode = HTMLCode + `>`+ this.name+`</option>`;

    return HTMLCode;
  }
}

export class Dropdown extends FormEntry {
  constructor(private id: string,
              public options: Option[],
              public description: string = '',
              private name: string = '',
              public width: string | null = null,
              public margin_bottom: string | null = null,
              public margin_top: string | null = null,
              private onchange: string | null = null) {
    super();
  }

  override getHTMLCode(): string {
    // Initiate the select object.
    let HTMLCode: string = `
                <select id="`+this.id+`"`;

    // Add onchange if any.
    if (this.onchange !== '') {
      HTMLCode = HTMLCode + `
                        onchange="`+this.onchange+`"`;
    }

    // Add description if any.
    if (this.description !== '') {
      HTMLCode = HTMLCode + `
                        title="`+this.description+`"`;
    }

    // Add name if needed.
    if (this.name !== '') {
      HTMLCode = HTMLCode + `
                               name="`+this.name+`"`;
    }

    // Add style.
    HTMLCode = HTMLCode + `
                        style="width: `+this.width+`;`;

    // Add margins if needed.
    if (this.margin_bottom !== null) {
      HTMLCode = HTMLCode + `
                               margin-bottom: `+this.margin_bottom+`;`;
    }

    if (this.margin_top !== null) {
      HTMLCode = HTMLCode + `
                               margin-top: `+this.margin_top+`;`;
    }

    HTMLCode = HTMLCode + `">`;

    // For every option add its HTML code.
    for (let option of this.options) {
      HTMLCode = HTMLCode + option.getHTMLCode();
    }

    // Close the select object.
    HTMLCode = HTMLCode + `
                </select>`
    return HTMLCode;
  }

  override getSetupJavascriptCode(): string {
    let i = 0;
    for (let option of this.options) {
      if (option.selected) {
        return `
        document.getElementById('`+this.id+`').options[`+i+`].selected=true;`
      }
      i = i + 1;
    }
    return '';
  }
}
