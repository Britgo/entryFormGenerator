import {OneLineTextArea} from "../../one.line.cell";
import {TextArea} from "../../form-entries/text.area";

const text_area: TextArea = new TextArea(
  'id_pmail',
  'PRI-EMAILPLAYER',
  'id_pnote',
  `Add here brief additional information.
For any complex issues, please email the Tournament Director.`,
  'Minimal punctuation is accepted in this comment field.',
  3,
  30,
  105,
  'NOTE',
  '0.7em',
  '0.0em',
  '0.5em',
  '100%',
  'none',
  true,
);

export const ADDITIONAL_INFORMATION = new OneLineTextArea(
  '',
  text_area,
  null,
  2,
);
