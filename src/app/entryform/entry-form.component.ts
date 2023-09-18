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
  @Input() validateEmail: boolean = false;
  @Input() additionalInfo: string = '';

  defaultTooltip = 'Either hover or click<br><br>on an info icon <img class="icon-help" src="assets/question_mark.png"><br><br>for help.';
  shownToolTip = this.defaultTooltip;

  setShownTooltip(newTooltip: string) {
    if (this.shownToolTip === newTooltip) {
      this.shownToolTip = this.defaultTooltip;
    } else {
      this.shownToolTip = newTooltip;
    }
  }
}
