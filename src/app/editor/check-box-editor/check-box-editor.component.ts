import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CheckBox} from "../../models";
import {faPlus, faXmark} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-check-box-editor',
  templateUrl: './check-box-editor.component.html',
  styleUrls: ['./check-box-editor.component.css', '../editor.component.css']
})
export class CheckBoxEditorComponent {
  @Input() checkBoxList: CheckBox[] = [];
  @Output() updateCheckBox:EventEmitter<CheckBox[]> = new EventEmitter<CheckBox[]>();

  faRemove = faXmark;
  faAdd = faPlus;


  removeCheckBox(n: number):void {
    console.log(this.checkBoxList);
    this.checkBoxList.splice(n,1);
    this.updateCheckBox.emit(this.checkBoxList);
    console.log(this.checkBoxList);
  }

  addCheckBox():void {
    this.checkBoxList.push(new CheckBox("TITLE", "NAME",false));
    this.updateCheckBox.emit(this.checkBoxList);
  }

  toggleCheckbox(checkBox: CheckBox):void {
    checkBox.checked = ! checkBox.checked;
    this.updateCheckBox.emit(this.checkBoxList);
  }
}
