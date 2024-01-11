import {InfoImage} from "./form-entries/info.image";
import {FormEntry} from "./form-entries/form.entry";
import {TextInput} from "./form-entries/text.input";
import {Dropdown} from "./form-entries/dropdown";

import {FormCell} from "./cell";

// This class models the two line cells appearing in the form.
export class TwoLinesCell extends FormCell {
  constructor(name: string,
              form_entry: FormEntry,
              info_image: InfoImage | null,
              colspan: number | null = null,
              width: string | null = null,
              text_align: 'left' | 'right' | 'center' = 'left') {
    super(name, form_entry, info_image, colspan, width, text_align);
  }
  override getHTMLCode(): string {
    let HTMLCode = this.getCellOpenHTMLCode();

    // Get the name.
    HTMLCode = HTMLCode + this.getFirstLineHTMLCode();

    // Break the line.
    HTMLCode = HTMLCode + `
                 <br>`;

    // Add input.
    HTMLCode = HTMLCode + this.getSecondLineHTMLCode();
    return HTMLCode + this.getCellCloseHTMLCode();
  }

  override getComponentWithDefault(): FormEntry {
    return this.form_entry;
  }

  getFirstLineHTMLCode(): string {
    return `
                 <span>`+this.name+`</span>`;
  }

  getSecondLineHTMLCode(): string {
    let HTMLCode: string = `
                 <span>`;

    HTMLCode = HTMLCode + this.form_entry.getHTMLCode();

    // Add the image if any.
    if (this.info_image !== null) {
      HTMLCode = HTMLCode + this.info_image.getHTMLCode();
    }

    // Close the span.
    HTMLCode = HTMLCode + `
                 </span>`
    return HTMLCode;
  }
}

// This class models the two line input text models used as default elements.
export class TwoLineInput extends TwoLinesCell {
  constructor (name: string,
               public text_input: TextInput,
               info_image: InfoImage,
               colspan: number | null = null,
               width: string | null = null,
               text_align: 'left' | 'right' = 'left') {
    super(name, text_input, info_image, colspan, width, text_align);
  }
}

// This class models the two line input text models used as default elements.
export class TwoLineDropdown extends TwoLinesCell {
  constructor (name: string,
               public dropdown: Dropdown,
               info_image: InfoImage | null = null,
               colspan: number | null = null,
               width: string | null = null,
               text_align: 'left' | 'right' = 'left') {
    super(name, dropdown, info_image, colspan, width, text_align);
  }
}
