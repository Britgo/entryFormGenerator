import {FormEntry} from "./form.entry";

export class TextInput extends FormEntry {
  constructor(private id: string,
              private name: string = '',
              public placeholder: string = '',
              public description: string = '',
              private autocomplete: 'off' | 'on' = 'off',
              private value: string = '',
              public width: string = '5.0em',
              public maxlength: number | null = null,
              private onkeyup: string | null = null,) {
    super();
  }

  override getHTMLCode(): string {
    let HTMLCode = `
                     <input id="`+this.id+`"
                            style="width: `+this.width+`"
                            autocomplete="`+this.autocomplete+`"
                            placeholder="`+this.placeholder+`"
                            title="`+this.description+`"
                            type="text"
                            value="`+this.value+`"`;

    // Maybe there is a name.
    if (this.name !== '') {
      HTMLCode = HTMLCode + `
                            name="`+this.name+`"`;
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

    // Close the brackets.
    return HTMLCode + `>`;
  }
}
