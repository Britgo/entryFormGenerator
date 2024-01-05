import {Component} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css', '../app.component.css']
})
export class EditorComponent{

  constructor(private sanitizer: DomSanitizer) {
  }
}
