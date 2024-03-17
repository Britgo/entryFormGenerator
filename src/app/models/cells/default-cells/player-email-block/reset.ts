import {Button} from "../../form-entries/button";
import {OneLineButton} from "../../one.line.cell";

const button = new Button(
  'id_restart',
  'Reset',
  'Restarts the page from scratch.',
  'button',
  true,
  'restart()',
  true,
);

export const RESET = new OneLineButton(
  '',
  button,
  null,
  null,
  null,
  'right'
);
