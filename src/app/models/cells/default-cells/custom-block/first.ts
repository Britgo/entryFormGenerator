import {OneLineCheckbox} from "../../one.line.cell";
import {Checkbox} from "../../form-entries/checkbox";
import {InfoImage} from "../../form-entries/info.image";

const checkbox: Checkbox = new Checkbox(
  'id_firstegd',
  'EXT-C-FIRST',
  false,
);

const info_image: InfoImage = new InfoImage(
  'id_puicon',
  `If you wish to remain anonymous, please uncheck this box.
In that case we show only your grade on the entry list.`,
);

export const FIRST = new OneLineCheckbox(
  'First rated tournament?',
  checkbox,
  info_image,
);
