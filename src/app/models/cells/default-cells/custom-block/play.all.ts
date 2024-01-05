import {OneLineCheckbox} from "../../one.line.cell";
import {Checkbox} from "../../form-entries/checkbox";
import {InfoImage} from "../../form-entries/info.image";

const checkbox: Checkbox = new Checkbox(
  'id_allrounds',
  'PLAYALL',
  true,
);

const info_image: InfoImage = new InfoImage(
  'id_plicon',
  `If you are not playing in every round, please tell us.
You can use the comment box below for details.`,
);

export const PLAY_ALL = new OneLineCheckbox(
  'Playing all rounds?',
  checkbox,
  info_image,
);
