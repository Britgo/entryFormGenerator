import {AnnouncementCell} from "../../announcement.cell";
import {Announcement} from "../../form-entries/announcement";

export const FEEHEADER = new AnnouncementCell(
  new Announcement('Please carefully select your correct entry category and fee below:','large','bolder'),
  2
);

export const FEEWARN = new AnnouncementCell(
  new Announcement('You may be charged the highest fee if you enter no selection.'),
  2
);
