import {FormEntry} from "./form.entry";

export class InfoImage extends FormEntry {
  constructor(id: string,
              public description: string,
              immutable: boolean = false) {
    super(id, immutable);
  }

  override getHTMLCode(): string {
    return `
                    <img id="` + this.id + `"
                         src="../entrysys/info.png"
                         class="icon-help"
                         alt="info"
                         onclick="show_info('` + this.id + `')"
                         title="` + this.description + `">`;
  }
}
