import {Row, TableGenerator} from "./table.generator";
import {GIVEN_INITIAL} from "./cells/default-cells/EGD-search-block/given.initial";
import {FAMILY_INITIAL} from "./cells/default-cells/EGD-search-block/family.initial";
import {EGD_PIN} from "./cells/default-cells/EGD-search-block/EGD.pin";
import {COUNTRY_CODE} from "./cells/default-cells/EGD-search-block/country.code";
import {PLAYER_COUNT} from "./cells/default-cells/EGD-search-block/player.count";

export const EGD_SEARCH_BLOCK = new TableGenerator(
  [
    new Row([GIVEN_INITIAL, FAMILY_INITIAL, EGD_PIN]),
    new Row([COUNTRY_CODE]),
    new Row([PLAYER_COUNT]),
  ]
);
