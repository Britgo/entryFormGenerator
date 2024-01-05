import {OneLineInput} from "../../one.line.cell";
import {TextInput} from "../../form-entries/text.input";
import {InfoImage} from "../../form-entries/info.image";

const text_input = new TextInput(
  'id_email',
  '',
  'current email address',
  'please provide your current email address',
  'on',
);

const info_image: InfoImage = new InfoImage(
  'id_emicon',
  'An email will be sent to you with all your form details.'
);

export const EMAIL_ADDRESS = new OneLineInput(
  '',
  text_input,
  info_image,
  null,
  '79%',
);
