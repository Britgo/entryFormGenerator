import {FormEntry} from "./form.entry";
import {joinStringArray} from "../../utils";

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
              public margin_top: string = '0.7em',
              public margin_bottom: string = '0.0em',
              public padding_left: string = '0.5em',
              public width: string = '100%',
              public resize: string = 'none') {
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
    if (this.margin_top + this.margin_bottom + this.padding_left + this.width + this.resize !== '') {
      HTMLCode = HTMLCode + `
                          style="`;
      if (this.margin_top !== '') {
        HTMLCode = HTMLCode + `
                                 margin-top:`+this.margin_top + `;`;
      }

      if (this.margin_bottom !== '') {
        HTMLCode = HTMLCode + `
                                 margin-bottom:`+this.margin_bottom + `;`;
      }

      if (this.padding_left !== '') {
        HTMLCode = HTMLCode + `
                                 padding-left:`+this.padding_left + `;`;
      }

      if (this.width !== '') {
        HTMLCode = HTMLCode + `
                                 width:`+this.width + `;`;
      }

      if (this.resize !== '') {
        HTMLCode = HTMLCode + `
                                 resize:`+this.resize + `;`;
      }

      HTMLCode = HTMLCode + `"`;
    }


    HTMLCode = HTMLCode + `>

                </textarea>`;
    return HTMLCode;
  }
}
