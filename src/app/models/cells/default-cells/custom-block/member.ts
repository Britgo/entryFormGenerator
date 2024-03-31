import {OneLineCheckbox} from "../../one.line.cell";
import {Checkbox} from "../../form-entries/checkbox";
import {InfoImage} from "../../form-entries/info.image";

const checkbox: Checkbox = new Checkbox(
  'id_member',
  'MEMBER',
  true,
  true,
);

const info_image: InfoImage = new InfoImage(
  'id_mlicon',
  `There is a surcharge for non-members of any Go association.`,
);

export const MEMBER = new OneLineCheckbox(
  'Association member?',
  checkbox,
  info_image,
);
