import {FormEntry} from "./form.entry";
import {joinStringArray} from "../../utils";

export class Button extends FormEntry {
  constructor(private id: string,
              public value: string,
              public description: string,
              private type: 'submit' | 'button' = 'button',
              private enabled: boolean = true,
              private onclick: string = '') {
    super();
  }

  override getHTMLCode(): string {
    // Button is formed by the following single input.
    let HTMLCode: string = `
                <input  id="`+this.id+`"
                        class="in-control tf_larger"
                        type="`+this.type+`"
                        value="`+this.value+`"
                        title="`+this.description+`"`;
    if (this.enabled) {
      HTMLCode = HTMLCode + `
                        enabled="true"`;
    }

    if (this.onclick !== '') {
      HTMLCode = HTMLCode + `
                        onclick="`+this.onclick+`"`;
    }

    return HTMLCode + `>`;
  }
}
