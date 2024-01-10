import {TwoLineInput} from "../../two.lines.cell";
import {TextInput} from "../../form-entries/text.input";
import {InfoImage} from "../../form-entries/info.image";

const text_input: TextInput = new TextInput(
  'id_lcode',
  'CODE-CY',
  '',
  'A 2 letter country code',
  'off',
  'UK',
);

const info_image: InfoImage = new InfoImage(
  'id_ccicon',
  `We need your two-letter country code.
You can select from the Country Name list instead.`
);

export const CUSTOM_BLOCK_COUNTRY_CODE = new TwoLineInput(
  'Country Code',
  text_input,
  info_image,
  null,
  '69%',
);
