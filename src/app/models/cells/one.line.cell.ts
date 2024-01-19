import {InfoImage} from "./form-entries/info.image";
import {FormEntry} from "./form-entries/form.entry";
import {TextInput} from "./form-entries/text.input";
import {Dropdown} from "./form-entries/dropdown";
import {FormCell} from "./cell";
import {Checkbox} from "./form-entries/checkbox";
import {TextArea} from "./form-entries/text.area";
import {Button} from "./form-entries/button";


// This class models the one line cells appearing in the form.
export class OneLineCell extends FormCell {
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

    // Get the form.
    HTMLCode = HTMLCode + this.form_entry.getHTMLCode();

    // Add the name of the cell.
    if (this.name !== '') {
      HTMLCode = HTMLCode + `
                <span>&nbsp;` + this.name + `</span>`;
    }

    // Add input.
    if (this.info_image !== null) {
      HTMLCode = HTMLCode + this.info_image.getHTMLCode();
    }

    // Close cell and return.
    return HTMLCode + this.getCellCloseHTMLCode();
  }

  override getComponentWithDefault(): FormEntry {
    return this.form_entry;
  }
}

// This class models the one line input text models used as default elements.
export class OneLineInput extends OneLineCell {
  constructor (name: string,
               public text_input: TextInput,
               info_image: InfoImage | null,
               colspan: number | null = null,
               width: string | null = null,
               text_align: 'left' | 'right' = 'left') {
    super(name, text_input, info_image, colspan, width, text_align);
  }
}

// This class models the one line text area models used as default elements.
export class OneLineTextArea extends OneLineCell {
  constructor (name: string,
               public text_area: TextArea,
               info_image: InfoImage | null,
               colspan: number | null = null,
               width: string | null = null,
               text_align: 'left' | 'right' = 'left') {
    super(name, text_area, info_image, colspan, width, text_align);
  }
}



// This class models the one line input text models used as default elements.
export class OneLineDropdown extends OneLineCell {
  constructor (name: string,
               public dropdown: Dropdown,
               info_image: InfoImage | null,
               colspan: number | null = null,
               width: string | null = null,
               text_align: 'left' | 'right' = 'left') {
    super(name, dropdown, info_image, colspan, width, text_align);
  }
}

// This class models the one line input text models used as default elements.
export class OneLineCheckbox extends OneLineCell {
  constructor (name: string,
               public checkbox: Checkbox,
               info_image: InfoImage | null,
               colspan: number | null = null,
               width: string | null = null,
               text_align: 'left' | 'right' = 'left') {
    super(name, checkbox, info_image, colspan, width, text_align);
  }
}

// This class models the one line button models used as default elements.
export class OneLineButton extends OneLineCell {
  constructor (name: string,
               public button: Button,
               info_image: InfoImage | null,
               colspan: number | null = null,
               width: string | null = null,
               text_align: 'left' | 'right' = 'left') {
    super(name, button, info_image, colspan, width, text_align);
  }
}
