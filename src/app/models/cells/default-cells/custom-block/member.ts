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
  `There is a £5 surcharge for players who are not a member of any <a href='https://www.eurogofed.org/members/'>EGF national association</a>.`,
);

export const MEMBER = new OneLineCheckbox(
  'Association member?',
  checkbox,
  info_image,
);
