import {Component, Input} from '@angular/core';
import {TableGenerator} from "../models/table.generator";
import {CUSTOM_BLOCK} from "../models/custom.block";
import {CellPosition} from "../models/cell.position";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css', '../app.component.css']
})
export class EditorComponent{
  @Input() custom_block: TableGenerator = CUSTOM_BLOCK;
  @Input() selected_cell: CellPosition = new CellPosition(null, null);
  @Input() edit_mode: boolean = true;
}
