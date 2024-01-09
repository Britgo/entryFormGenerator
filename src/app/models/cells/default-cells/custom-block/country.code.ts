import {TwoLineInput} from "../../two.lines.cell";
import {TextInput} from "../../form-entries/text.input";
import {InfoImage} from "../../form-entries/info.image";

const text_input: TextInput = new TextInput(
  'id_gname',
  'GIVEN',
  '',
  'Your given name must not be blank - use underscore (_) if needed.',
  'off',
  '',
  '38.3em',
);

const info_image: InfoImage = new InfoImage(
  'id_ginfo',
  `Type your given name including any middle names if needed.
Use underscore (_) if you have no given name.`
);

export const CLUB_CODE = new TwoLineInput(
  'Country Code',
  text_input,
  info_image,
  null,
  '69%',
);
