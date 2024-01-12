import {Component, Input} from '@angular/core';
import {EmptyCell} from "../../../../models/cells/cell";

@Component({
  selector: 'app-empty-cell',
  templateUrl: './empty-cell.component.html',
  styleUrls: ['./empty-cell.component.css']
})
export class EmptyCellComponent {
  @Input() empty_cell: EmptyCell = new EmptyCell();
}
