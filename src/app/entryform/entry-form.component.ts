import {Component, Input} from '@angular/core';
import {Radio, CheckBox, DropDown} from "../models";


@Component({
  selector: 'app-entryform',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent {
  @Input() radioList: Radio[] = [];
  @Input() checkBoxList: CheckBox[] = [];
  @Input() dropDownList: DropDown[] = [];

  defaultTooltip = "Either hover or click<br><br> on an info icon <span class=\"icon-i\"> i </span><br><br>for help.";
  shownToolTip = this.defaultTooltip;

  setShownTooltip(newTooltip: string) {
    if (this.shownToolTip === newTooltip) {
      this.shownToolTip = this.defaultTooltip;
    } else {
      this.shownToolTip = newTooltip;
    }
  }
}
