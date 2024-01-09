import {TextInput} from "../../form-entries/text.input";
import {InfoImage} from "../../form-entries/info.image";
import {TwoLineInput} from "../../two.lines.cell";

const text_input = new TextInput(
  'id_egdpin',
  'EGDPIN',
  '8 digit pin',
  '',
  'on',
  '',
  '7em',
  8,
  `handle_keyup_qpin(event)`,
);

const info_image: InfoImage = new InfoImage(
  'id_segdpin',
  `Type your 8 digit EGD pin.&#13;
The pin is automatically set if you searched using your initials.`
);

export const EGD_PIN = new TwoLineInput(
  'EGD Pin',
  text_input,
  info_image,
  null,
  null,
);
