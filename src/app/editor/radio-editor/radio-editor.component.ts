import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Radio} from "../../models";
import {faPlus, faXmark} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-radio-editor',
  templateUrl: './radio-editor.component.html',
  styleUrls: ['./radio-editor.component.css', '../editor.component.css']
})
export class RadioEditorComponent {
  @Input() radioList: Radio[] = [];
  @Output() updateRadio:EventEmitter<Radio[]> = new EventEmitter<Radio[]>();

  faRemove = faXmark;
  faAdd = faPlus;

  removeRadio(n: number): void {
    this.radioList.splice(n, 1);
    this.updateRadio.emit(this.radioList);
  }

  addOption(radio: Radio): void {
    radio.options.push("Option " + radio.options.length);
    this.updateRadio.emit(this.radioList);
  }

  removeOption(radio: Radio, n: number): void {
    radio.options.splice(n,1);
    this.updateRadio.emit(this.radioList);
  }

  addRadio():void {
    this.radioList.push(new Radio("TITLE", ["OPTION 1"], 0));
    this.updateRadio.emit(this.radioList);
  }

  selectDefault(radio: Radio, n: number):void {
    radio.chosen = n;
    this.updateRadio.emit(this.radioList);
  }

  modifyOption(radio: Radio, n: number, newOption: string):void {
    radio.options[n] = newOption;
    this.updateRadio.emit(this.radioList);
  }
}
