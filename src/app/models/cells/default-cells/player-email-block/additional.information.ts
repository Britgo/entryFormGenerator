import {OneLineTextArea} from "../../one.line.cell";
import {TextArea} from "../../form-entries/text.area";

const text_area: TextArea = new TextArea(
  'id_pmail',
  'PRI-EMAILPLAYER',
  'id_pnote',
  `Add here brief additional information.
For any complex issues, please email the Tournament Director.`,
  'Minimal punctuation is accepted in this comment field.',
);

export const ADDITIONAL_INFORMATION = new OneLineTextArea(
  '',
  text_area,
  null,
  2,
);
