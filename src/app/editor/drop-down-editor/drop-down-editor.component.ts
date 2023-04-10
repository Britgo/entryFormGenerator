import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DropDown} from "../../models";
import {faPlus, faXmark} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-drop-down-editor',
  templateUrl: './drop-down-editor.component.html',
  styleUrls: ['./drop-down-editor.component.css', '../editor.component.css']
})
export class DropDownEditorComponent {
  @Input() dropDownList: DropDown[] = [];
  @Output() updateDropDown:EventEmitter<DropDown[]> = new EventEmitter<DropDown[]>();

  faRemove = faXmark;
  faAdd = faPlus;

  removeDropDown(n: number):void {
    this.dropDownList.splice(n, 1);
    this.updateDropDown.emit(this.dropDownList);
  }

  addOption(dropDown: DropDown): void {
    dropDown.options.push("Option " + dropDown.options.length);
    this.updateDropDown.emit(this.dropDownList);
  }

  removeOption(dropDown: DropDown, n: number): void {
    dropDown.options.splice(n, 1);
    this.updateDropDown.emit(this.dropDownList);
  }

  addDropDown():void {
    this.dropDownList.push(new DropDown("NAME", "TOOLTIP","TITLE",["OPTION 1"], 0));
    this.updateDropDown.emit(this.dropDownList);
  }

  select(dropDown: DropDown, n: number):void {
    dropDown.chosen = n;
    this.updateDropDown.emit(this.dropDownList);
  }

  selectDefault(dropDown: DropDown, n: number):void {
    dropDown.chosen = n;
    this.updateDropDown.emit(this.dropDownList);
  }

  modifyOption(dropDown: DropDown, n: number, newOption: string) {
    dropDown.options[n] = newOption;
    this.updateDropDown.emit(this.dropDownList);
  }
}
