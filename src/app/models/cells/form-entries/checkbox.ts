import {FormEntry} from "./form.entry";

export class Checkbox extends FormEntry {
  constructor(id: string,
              public name: string,
              public checked: boolean,
              immutable: boolean = false) {
    super(id, immutable);
  }

  override getHTMLCode(): string {
    // Checkbox is formed solely by two inputs. First one is hidden and the second one is of type checkbox.
    // TODO understand why the first one is hidden.
    let HTMLCode: string = `
                <input  name="`+this.name+`" type="hidden" value="N">
                <input id="`+this.id+`" name="`+this.name+`"  type="checkbox" value="Y"`;

    // If element is checked we need to mark it as so.
    if (this.checked) {
      HTMLCode = HTMLCode + ` checked`;
    }
    HTMLCode = HTMLCode + `>`;
    return HTMLCode;
  }

  override getSetupJavascriptCode(): string {
    if (this.checked) {
      return `
        document.getElementById('`+this.id+`').checked=true;`
    }
    return '';
  }
}
