import {FormEntry} from "./form-entries/form.entry";
import {Cell} from "./cell";
import {Announcement} from "./form-entries/announcement";


// This class models a cell meant to just contain an announcement from the TD.
export class AnnouncementCell extends Cell {
  constructor(public announcement: Announcement,
              colspan: number | null = null,
              width: string | null = null,
              text_align: 'left' | 'right' | 'center' = 'left') {
    super(colspan, width, text_align);
  }
  override getHTMLCode(): string {
    let HTMLCode = this.getCellOpenHTMLCode();

    // Get the announcement.
    HTMLCode = HTMLCode + this.announcement.getHTMLCode();

    // Close cell and return.
    return HTMLCode + this.getCellCloseHTMLCode();
  }

  override getComponentWithDefault(): FormEntry {
    return this.announcement;
  }
}
