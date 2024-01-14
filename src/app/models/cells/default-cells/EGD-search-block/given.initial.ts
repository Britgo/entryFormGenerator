import {TextInput} from "../../form-entries/text.input";
import {InfoImage} from "../../form-entries/info.image";
import {TwoLineInput} from "../../two.lines.cell";

const text_input = new TextInput(
  'id_gsearch',
  '',
  'given',
  '',
  'off',
  '',
  '5.0em',
  null,
  `handle_keyup_qdata('id_gsearch', event)`,
  null,
  true,
);

const info_image: InfoImage = new InfoImage(
  'id_sgiven',
  `Type the initial character(s) of your first name.
Please type underscore (_) if you have no first name.
The EGD search starts once you begin typing your family initial.`
);

export const GIVEN_INITIAL = new TwoLineInput(
  'Given Initial',
  text_input,
  info_image,
  null,
  '20%',
);
