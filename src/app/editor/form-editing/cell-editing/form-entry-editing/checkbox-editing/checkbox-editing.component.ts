import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Checkbox} from "../../../../../models/cells/form-entries/checkbox";
import {MAT_TOOLTIP_POSITION, MAT_TOOLTIP_SHOW_DELAY} from "../../../../../models/constants";
import {sanitizeString} from "../../../../../models/string.formatting";

@Component({
  selector: 'app-checkbox-editing',
  templateUrl: './checkbox-editing.component.html',
  styleUrls: ['./checkbox-editing.component.css', '../../../../editor.component.css']
})
export class CheckboxEditingComponent implements OnChanges{
  @Input() checkbox: Checkbox = new Checkbox('id', 'NAME', true)

  @Output() id_change = new EventEmitter<string>()

  protected readonly POSITION = MAT_TOOLTIP_POSITION;
  protected readonly SHOW_DELAY = MAT_TOOLTIP_SHOW_DELAY;
  name = this.getName();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['checkbox'].firstChange) {
      this.resetNameFromCheckbox();
    } else if (changes['checkbox'].previousValue !== changes['checkbox'].currentValue) {
      this.resetNameFromCheckbox();
    }
  }

  onIdChange() {
    this.checkbox.id = sanitizeString(this.checkbox.id);
    this.id_change.emit(this.checkbox.id);
  }

  resetNameFromCheckbox() {
    this.name = this.getName();
  }

  private getName() {
    return this.checkbox.name.slice(6);
  }

  updateName() {
    this.name = sanitizeString(this.name, '-').toUpperCase();
    this.checkbox.name = 'EXT-C-'+this.name;
  }
}
