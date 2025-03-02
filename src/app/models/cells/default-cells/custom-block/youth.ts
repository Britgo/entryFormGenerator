import {OneLineCheckbox} from "../../one.line.cell";
import {Checkbox} from "../../form-entries/checkbox";
import {InfoImage} from "../../form-entries/info.image";

const checkbox: Checkbox = new Checkbox(
  'id_youth',
  'YOUTH',
  false,
  true,
);

const info_image: InfoImage = new InfoImage(
  'id_mlicon',
  `Children and young people are welcome to participate in a Go Tournament, but the tournament organisers are not able to supervise children attending the event.
Young people under the age of 16 should be accompanied by a parent, carer or someone acting in loco parentis.`,
);

export const YOUTH = new OneLineCheckbox(
  'Youth?',
  checkbox,
  info_image,
);
