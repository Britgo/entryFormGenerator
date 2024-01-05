import {TextInput} from "../../form-entries/text.input";
import {InfoImage} from "../../form-entries/info.image";
import {TwoLineInput} from "../../two.line.cell";

const text_input = new TextInput(
  'id_fsearch',
  '',
  'family',
  '',
  'off',
  '',
  '5.0em',
  null,
  `handle_keyup_qdata('id_fsearch', event)`,
);

const info_image: InfoImage = new InfoImage(
  'id_sfamily',
  `Type the initial character(s) of your surname to begin the EGD search.`
);

export const FAMILY_INITIAL = new TwoLineInput(
  'Family Initial',
  text_input,
  info_image,
  null,
  '58%',
);
