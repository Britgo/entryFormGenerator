import {TableGenerator} from "./table.generator";
import {Cell} from "./cells/cell";
import {EMAIL_ADDRESS} from "./cells/default-cells/player-email-block/email.address";
import {ADDITIONAL_INFORMATION} from "./cells/default-cells/player-email-block/additional.information";
import {SUBMIT} from "./cells/default-cells/player-email-block/submit";
import {RESET} from "./cells/default-cells/player-email-block/reset";
import {Row} from "./row";

export const PLAYER_EMAIL_BLOCK = new TableGenerator(
  [
    new Row([EMAIL_ADDRESS, new Cell()]),
    new Row([ADDITIONAL_INFORMATION]),
    new Row([SUBMIT, RESET]),
  ]
);
