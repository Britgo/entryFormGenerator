import {Component, Input} from '@angular/core';
import {CheckBox, DropDown, Radio} from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tournament-entry-form-generator';
  radioList: Radio[] = [new Radio('Choose your free meal', ['Lunch', 'Dinner', 'No Meal'], 2)];
  checkBoxList: CheckBox[] = [new CheckBox('There is a discount for members of any Go association', 'Association member?', true)];
  dropDownList: DropDown[] = [new DropDown('Travel', 'Modes of transport', 'Please tell us how you are traveling so that we can arrange a shuttle to the venue.', ['hyperdrive', 'elevator', 'sail'], 2)];
  validateEmail: boolean = false;
  showCountry: boolean = true;
  showClub: boolean = true;
  showGrade: boolean = true;
  playAllRounds: boolean = true;
  firstTournament: boolean = true;
  publicEntry: boolean = true;
  additionalInfo: string = '';

  updateRadio(newRadioList: Radio[]) {
    this.radioList = newRadioList;
  }

  updateCheckBox(newCheckBoxList: CheckBox[]) {
    this.checkBoxList = newCheckBoxList;
  }

  updateDropDown(newDropDownList: DropDown[]) {
    this.dropDownList = newDropDownList;
  }

  updateValidateEmail(validateEmail: boolean) {
    this.validateEmail = validateEmail;
  }

  updateShowCountry(showCountry: boolean) {
    this.showCountry = showCountry
  }
  updateShowClub(showClub: boolean) {
    this.showClub = showClub
  }
  updateShowGrade(showGrade: boolean) {
    this.showGrade = showGrade
  }
  updatePlayAllRounds(playAllRounds: boolean) {
    this.playAllRounds = playAllRounds
  }
  updateFirstTournament(firstTournament: boolean) {
    this.firstTournament = firstTournament
  }
  updatePublicEntry(publicEntry: boolean) {
    this.publicEntry = publicEntry
  }

  updateAdditionalInfo(text: string) {
    this.additionalInfo = text;
  }
}
