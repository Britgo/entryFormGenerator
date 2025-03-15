import {FormEntry} from "./form.entry";

export class InfoImage extends FormEntry {
  constructor(id: string,
              public description: string,
              immutable: boolean = false) {
    super(id, immutable, false);
  }

  sanitizeText(description: string): string {
    return description.replaceAll("\"", "'");
  }

  override getHTMLCode(): string {
    return `
                    <img id="` + this.id + `"
                         src="../entrysys/info.png"
                         class="icon-help"
                         alt="info"
                         onclick="show_info('` + this.id + `')"
                         title="` + this.sanitizeText(this.description) + `">`;
  }
}
