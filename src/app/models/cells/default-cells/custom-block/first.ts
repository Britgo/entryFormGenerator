import {OneLineCheckbox} from "../../one.line.cell";
import {Checkbox} from "../../form-entries/checkbox";
import {InfoImage} from "../../form-entries/info.image";

const checkbox: Checkbox = new Checkbox(
  'id_firstegd',
  'FIRST',
  false,
  true
);

const info_image: InfoImage = new InfoImage(
  'id_puicon',
  `Click here if you do not have an EGD rating.
This can be either because you have never played in a Go tournament in europe or because it has been a long time since your last game.`,
);

export const FIRST = new OneLineCheckbox(
  'First rated tournament?',
  checkbox,
  info_image,
);
