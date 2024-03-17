import {FormEntry} from "./form.entry";

export class Button extends FormEntry {
  constructor(id: string,
              public value: string,
              public description: string,
              public type: 'submit' | 'button' = 'button',
              private enabled: boolean = true,
              private onclick: string = '',
              immutable: boolean = false) {
    super(id, immutable);
  }

  override getHTMLCode(): string {
    // Button is formed by the following single input.
    let HTMLCode: string = `
                <input  id="`+this.id+`"
                        class="in-control tf_larger"
                        type="`+this.type+`"
                        value="`+this.value+`"
                        title="`+this.description+`"`;
    if (!this.enabled) {
      HTMLCode = HTMLCode + `
                        disabled="disabled"`;
    }

    if (this.onclick !== '') {
      HTMLCode = HTMLCode + `
                        onclick="`+this.onclick+`"`;
    }

    return HTMLCode + `>`;
  }
}
