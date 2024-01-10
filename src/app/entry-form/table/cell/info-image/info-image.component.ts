import {Component, Input} from '@angular/core';
import {MAT_TOOLTIP_POSITION_AT_ORIGIN, MAT_TOOLTIP_SHOW_DELAY} from "../../../../models/constants";
import {InfoImage} from "../../../../models/cells/form-entries/info.image";

@Component({
  selector: 'app-info-image',
  templateUrl: './info-image.component.html',
  styleUrls: ['./info-image.component.css']
})
export class InfoImageComponent {
  @Input() info_image: InfoImage = new InfoImage('id', 'description');

  protected readonly POSITION_AT_ORIGIN = MAT_TOOLTIP_POSITION_AT_ORIGIN;
  protected readonly SHOW_DELAY = MAT_TOOLTIP_SHOW_DELAY;
}
