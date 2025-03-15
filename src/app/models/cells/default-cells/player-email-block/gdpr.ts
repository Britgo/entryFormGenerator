import {OneLineCheckbox} from "../../one.line.cell";
import {Checkbox} from "../../form-entries/checkbox";
import {InfoImage} from "../../form-entries/info.image";

const checkbox: Checkbox = new Checkbox(
  'id_gdpr',
  'GDPR',
  false,
  true,
  true
);

const info_image: InfoImage = new InfoImage(
  'id_gdpricon',
  `By checking this box you agree that the data in this form will be handled according to the BGA data protection policy.
You can find more information regarding the BGA data protection policy <a href='https://www.britgo.org/Policy12'>here</a>.`,
);

export const GDPR = new OneLineCheckbox(
  `I agree to the <a href='https://www.britgo.org/Policy12'>BGA data protection policy</a>`,
  checkbox,
  info_image,
  2
);
