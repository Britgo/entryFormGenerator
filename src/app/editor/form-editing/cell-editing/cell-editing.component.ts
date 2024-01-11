import {Component, Input} from '@angular/core';
import {Cell} from "../../../models/cells/cell";

@Component({
  selector: 'app-cell-editing',
  templateUrl: './cell-editing.component.html',
  styleUrls: ['./cell-editing.component.css']
})
export class CellEditingComponent {
  @Input() cell: Cell = new Cell();
}
