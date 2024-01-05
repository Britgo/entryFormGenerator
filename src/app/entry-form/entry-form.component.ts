import {Component, Input} from '@angular/core';
import {EGDSearchBlock} from "../models/EGD.search.block";


@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent {
  @Input() EGDBlock: EGDSearchBlock = new EGDSearchBlock([]);

}
