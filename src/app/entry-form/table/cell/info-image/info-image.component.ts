import {Component, Input} from '@angular/core';
import {MAT_TOOLTIP_POSITION, MAT_TOOLTIP_SHOW_DELAY} from "../../../../models/constants";
import {InfoImage} from "../../../../models/cells/form-entries/info.image";
import {TooltipPosition} from "@angular/material/tooltip";

@Component({
  selector: 'app-info-image',
  templateUrl: './info-image.component.html',
  styleUrls: ['./info-image.component.css']
})
export class InfoImageComponent {
  @Input() info_image: InfoImage = new InfoImage('id', 'description');
  @Input() edit_mode: boolean = true

  protected readonly POSITION: TooltipPosition = MAT_TOOLTIP_POSITION;
  protected readonly SHOW_DELAY:number = MAT_TOOLTIP_SHOW_DELAY;
}
