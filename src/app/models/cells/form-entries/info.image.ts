import {FormEntry} from "./form.entry";

export class InfoImage extends FormEntry {
  constructor(private readonly id: string,
              public readonly description: string) {
    super();
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
