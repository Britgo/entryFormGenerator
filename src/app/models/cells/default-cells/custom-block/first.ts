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
  `Tick if you do not have an <a href='https://www.europeangodatabase.eu/EGD/'>EGD</a> rating.
This will be because you have never played in a rated Go tournament in Europe since 1996.`,
);

export const FIRST = new OneLineCheckbox(
  'First rated tournament?',
  checkbox,
  info_image,
);
