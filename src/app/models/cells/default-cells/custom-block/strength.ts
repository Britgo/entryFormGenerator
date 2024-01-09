import {TwoLineInput} from "../../two.lines.cell";
import {TextInput} from "../../form-entries/text.input";
import {InfoImage} from "../../form-entries/info.image";

const text_input: TextInput = new TextInput(
  'id_rated',
  'EGDRATE',
  '',
  'Your strength is obtained from EGD. Please see the info to the right.',
  'off',
  '',
  '10.5em'
);

const info_image: InfoImage = new InfoImage(
  'id_sgicon',
  `Leave this blank if this is your first rated tournament.
If you have a rating, your entry Grade should be close to your rounded Strength.
Please let us know reasons if you wish to enter at a different grade.`
);

export const STRENGTH = new TwoLineInput(
  'Strength',
  text_input,
  info_image,
);
