import {OneLineInput} from "../../one.line.cell";
import {TextInput} from "../../form-entries/text.input";
import {InfoImage} from "../../form-entries/info.image";

const text_input = new TextInput(
  'id_email',
  '',
  'Current email address',
  'Please provide your current email address',
  'on',
  '',
  '16em',
  null,
  null,
  '0.4em',
  true,
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
