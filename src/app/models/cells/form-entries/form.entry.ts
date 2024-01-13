export class FormEntry {
  constructor(public id: string, public immutable: boolean = false) {
  }

  getHTMLCode(): string {
    return 'The getHTMLCode function must be implemented.'
  }

  getSetupJavascriptCode(): string {
    return '';
  }
}
