import {OneLineCheckbox} from "../../one.line.cell";
import {InfoImage} from "../../form-entries/info.image";
import {Checkbox} from "../../form-entries/checkbox";


const checkbox: Checkbox = new Checkbox(
  'id_public',
  'PUBLIC',
  true,
);

const info_image: InfoImage = new InfoImage(
  'id_puicon',
  `If you wish to remain anonymous, please uncheck this box.
In that case we show only your grade on the entry list.`,
);

export const PUBLIC = new OneLineCheckbox(
  'Public entry?',
  checkbox,
  info_image,
);
