import {TwoLineInput} from "../../two.lines.cell";
import {TextInput} from "../../form-entries/text.input";
import {InfoImage} from "../../form-entries/info.image";

const text_input: TextInput = new TextInput(
  'id_grade',
  'GRADE',
  '',
  'One or two digits followed by k,d, or p.',
  'off',
  '',
  '5em',
  6
);

const info_image: InfoImage = new InfoImage(
  'id_gricon',
  `Please type your grade if this is your first rated tournament. We need 1 or 2 digits followed by k,d or p.
Otherwise it is your grade as known from your last tournament.
Please adjust if your Strength has changed.`
);

export const GRADE: TwoLineInput = new TwoLineInput(
  'Grade',
  text_input,
  info_image,
);
