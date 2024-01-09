import {InfoImage} from "../../form-entries/info.image";
import {TwoLineDropdown} from "../../two.lines.cell";
import {Dropdown, Option} from "../../form-entries/dropdown";

const option: Option = new Option(
  'NO PLAYERS',
  false,
  '0'
);

const dropdown = new Dropdown(
  'id_players',
  [option],
  'list of EGD players',
  '',
  '100%',
  '0.5em',
  '0.005em',
  `handle_playerlist_change()`,
);

export const PLAYER_COUNT = new TwoLineDropdown(
  `PLAYER COUNT <span id="id_nplayer">0</span>`,
  dropdown,
  null,
  3,
  null,
  'right'
);
