const ALLOWED_CHARACTERS= "abcdefghijklmnopqrstuvwxyz0123456789"

export function capitalizeString(input: string) {
  if (input.length === 0) {
    return input;
  }
  let output = input.toLocaleLowerCase()

  return output.charAt(0).toUpperCase() + output.slice(1);
}

export function capitalizeAll(input: string): string {
  let l = input.split(' ');
  l = l.map(capitalizeString);
  return l.join(' ')
}

export function sanitizeString(input: string, spaceReplacement: string = '_') {
  let output = '';
  for (let char of input.toLowerCase()) {
    if (ALLOWED_CHARACTERS.indexOf(char) !== -1) {
      output = output + char;
    } else {
      if (char === ' ') {
        output = output + spaceReplacement;
      }
    }
  }
  return output
}

function stringToID(input: string):string {
  return 'id_' + sanitizeString(input);
}

function stringToName(input: string) :string {
  return 'EXT-D-' + sanitizeString(input,'-').toUpperCase();
}

export class Radio {
  constructor(public title: string, public options: string[], public chosen: number) {
  }

  getID() {
    return stringToID(this.title);
  }

  getName() {
    return stringToName(this.title);
  }

  preProcessOption(option: number) {
    return Math.round(Math.min(Math.max(option, 0), this.options.length - 1));
  }

  getOptionID(option: number) {
    return 'id_' + sanitizeString(this.options[this.preProcessOption(option)]);
  }

  getOptionValue(option: number) {
    return sanitizeString(this.options[this.preProcessOption(option)]);
  }

  toHTML() {
    let html_str = '<span class="sp-shim vs-med"></span>\n';
    let i = 0;
    for (let option of this.options) {
      html_str = html_str + '<input id="'+this.getOptionID(i)+'" name="'+this.getName()+'" type="radio" value="';
      html_str = html_str + this.getOptionValue(i)+'"> '+option;
      if (i !== this.options.length-1) {
        html_str = html_str +' &nbsp;';
      }
      html_str = html_str +' \n';
      i += 1;
    }

    const processed_id = this.getID();
    html_str = html_str + '<img id="'+processed_id+'" class="icon-help" src="../entrysys/info.png" alt="info"';
    html_str = html_str + 'onclick="show_info(\''+processed_id+'\')"';
    html_str = html_str + 'title="'+this.title+'">\n<br>\n';
    return html_str;
  }

  defaultToHTML() {
    return "document.getElementById('" + this.getOptionID(this.chosen) + "').checked=true;\n"
  }
}

export class CheckBox {
  constructor(public title: string, public name: string, public checked: boolean) {
  }

  getID() {
    return stringToID(this.name);
  }

  getName() {
    return stringToName(this.name);
  }

  getQIconID() {
    return this.getID() + '_icon';
  }

  toHTML() {
    let html_str = '<span class="sp-shim vs-max"></span>\n';
    html_str = html_str + '<input name="'+this.getName()+'" type="hidden" value="N">\n';
    html_str = html_str + '<input   id="'+this.getID()+'" name="'+this.getName()+'" type="checkbox" value="Y"> ';
    html_str = html_str + this.name + ' \n';
    html_str = html_str + '<img id="' + this.getQIconID() + '" class="icon-help" src="../entrysys/info.png" alt="info"';
    html_str = html_str + ' onclick="show_info(\'' + this.getQIconID() + '\')"\n';
    html_str = html_str + 'title="' + this.title + '">\n\n<br>\n';
    return html_str;
  }

  defaultToHTML() {
    return 'document.getElementById(\''+this.getID()+'\').checked=true;\n';
  }
}

export class DropDown {
  constructor(public name: string, public tooltip: string, public title: string, public options: string[],
              public chosen: number) {
  }

  getID() {
    return stringToID(this.name);
  }

  getName() {
    return stringToName(this.name);
  }

  getQIconID() {
    return this.getID() + '_icon';
  }

  toHTML() {
    let html_str = '<span class="sp-shim vs-max"></span>\n';
    html_str = html_str + '<select id="'+this.getID()+'" name="'+this.getName()+'" title="'+this.tooltip+'">\n';
    for (let option of this.options) {
      html_str = html_str + '<option value="'+sanitizeString(option)+'">'+option+'</option>\n';
    }
    html_str = html_str + '</select>\n&nbsp;&nbsp;' + this.name+'\n';
    html_str = html_str + '<img id="' + this.getQIconID() + '" class="icon-help" src="../entrysys/info.png" alt="info"';
    html_str = html_str + 'onclick="show_info(\'' + this.getQIconID() + '\')"\n';
    html_str = html_str + 'title="' + this.title + '">\n';
    return html_str;
  }

  defaultToHTML() {
    return 'document.getElementById(\''+ this.getID() + '\').options['+this.chosen.toString()+'].selected=true;\n';
  }
}
