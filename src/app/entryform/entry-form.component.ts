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
  @Input() showCountry: boolean = true;
  @Input() showClub: boolean = true;
  @Input() showGrade: boolean = true;
  @Input() playAllRounds: boolean = true;
  @Input() firstTournament: boolean = true;
  @Input() publicEntry: boolean = true;
  @Input() additionalInfo: string = '';

  defaultTooltip = 'Either hover or click<br><br>on an info icon <img class="icon-help" src="assets/question_mark.png"><br><br>for help.';
  shownToolTip = this.defaultTooltip;


  getTooltipHeight() {
    let height = this.showCountry?41:37;
    height = this.showClub?height:(height-4);
    height = this.showGrade?height:(height-4);
    height = this.playAllRounds?height:(height-1);
    height = this.firstTournament?height:(height-1);
    height = this.publicEntry?height:(height-1);
    return height;
  }

  setShownTooltip(newTooltip: string) {
    if (this.shownToolTip === newTooltip) {
      this.shownToolTip = this.defaultTooltip;
    } else {
      this.shownToolTip = newTooltip;
    }
  }

  getPlayAllRoundsText() {
    if (this.playAllRounds) {
      return ' Playing all rounds?';
    } else {
      return '';
    }
  }

  getFirstTournamentText() {
    if (this.firstTournament) {
      return ' First rated tournament?';
    } else {
      return '';
    }
  }

  getPublicEntryText() {
    if (this.publicEntry) {
      return ' Public entry?';
    } else {
      return '';
    }
  }
}
