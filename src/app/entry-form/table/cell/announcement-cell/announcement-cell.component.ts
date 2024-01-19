import {Component, Input} from '@angular/core';
import {AnnouncementCell} from "../../../../models/cells/announcement.cell";
import {Announcement} from "../../../../models/cells/form-entries/announcement";

@Component({
  selector: 'app-announcement-cell',
  templateUrl: './announcement-cell.component.html',
  styleUrls: ['./announcement-cell.component.css']
})
export class AnnouncementCellComponent {
  @Input() announcement_cell: AnnouncementCell = new AnnouncementCell(new Announcement(''));
  @Input() edit_mode: boolean = true;


}
