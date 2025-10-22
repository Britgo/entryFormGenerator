import {OneLineDropdown} from "../../one.line.cell";
import {Dropdown, Option} from "../../form-entries/dropdown";
import {InfoImage} from "../../form-entries/info.image";

const dropdown: Dropdown = new Dropdown(
  'id_lname',
  [
    new Option('SELECT FEE CATEGORY AND AMOUNT', true, ''),
    new Option('Adult member – £??', false, 'adult-mem-??'),
    new Option('Youth member – £??', false, 'youth-mem-??'),
    new Option('Adult non-member – £??', false, 'adult-mem-??'),
    new Option('Youth non-member – £??', false, 'youth-nonmem-??'),
  ],
  'Click the info button "i" for an explanation of terms.',
  'FEE',
  '82%',
  null,
  null,
  'set_lcode()',
  true,
  true
);

const info_image: InfoImage = new InfoImage(
  'id_feeinfo',
  `𝐄𝐱𝐩𝐥𝐚𝐧𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐭𝐞𝐫𝐦𝐬
First rated tournament: you do not have an <a href='https://www.europeangodatabase.eu/EGD/'>EGD</a> rating. This will be because you have never played in a rated Go tournament in Europe since 1996.
Youth: under 18 on the day of the tournament. 
BGA member: you have an active membership of the BGA or another national association on the day of the tournament. You can <a href='https://www.britgo.org/join'>join the BGA</a> online; this helps to support promotion of Go in the UK and entitles you to reduced entry fees to tournaments.`
);

export const FEE = new OneLineDropdown('Entry Fee', dropdown, info_image, 2);
