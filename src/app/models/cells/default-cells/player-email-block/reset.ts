import {Button} from "../../form-entries/button";
import {OneLineButton} from "../../one.line.cell";

const button = new Button(
  'id_submit',
  'Reset',
  'Restarts the page from scratch.',
  'button',
  true,
  'restart()'
);

export const RESET = new OneLineButton(
  '',
  button,
  null,
  null,
  null,
  'right'
);
