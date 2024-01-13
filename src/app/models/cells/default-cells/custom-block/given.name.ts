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
  42,
  null,
  null,
  true
);

const info_image: InfoImage = new InfoImage(
  'id_ginfo',
  `Type your given name including any middle names if needed.
Use underscore (_) if you have no given name.`
);

export const GIVEN_NAME = new TwoLineInput(
  'Given Name',
  text_input,
  info_image,
  2
);
