const ALLOWED_CHARACTERS= "abcdefghijklmnopqrstuvwxyz0123456789"

function preProcessString(input: string) {
  let output = '';
  for (let char of input.toLowerCase()) {
    if (ALLOWED_CHARACTERS.indexOf(char) !== -1) {
      output = output + char;
    } else {
      if (char === ' ') {
        output = output + '_'
      }
    }
  }
  return output
}

export class Radio {
  constructor(public title: string, public options: string[], public chosen: number) {
  }

  getID() {
    return 'id_' + preProcessString(this.title);
  }

  preProcessOption(option: number) {
    return Math.round(Math.min(Math.max(option, 0), this.options.length - 1));
  }

  getOptionID(option: number) {
    return 'id_' + preProcessString(this.options[this.preProcessOption(option)]);
  }

  getOptionValue(option: number) {
    return preProcessString(this.options[this.preProcessOption(option)]);
  }

  toHTML() {
    let html_str = '<span class="sp-shim vs-med"></span>\n';
    let i = 0;
    for (let option of this.options) {
      html_str = html_str + '<input id="'+this.getOptionID(i)+'" name="EXT-R-MEAL" type="radio" value="';
      html_str = html_str + this.getOptionValue(i)+'"> '+option;
      if (i !== this.options.length-1) {
        html_str = html_str +' &nbsp;';
      }
      html_str = html_str +' \n';
      i += 1;
    }

    html_str = html_str + '<img id="'+this.getID()+'" class="icon-help" src="info.png" alt="info"';
    html_str = html_str + 'onclick="show_info(\''+this.getID()+'\')"';
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
    return 'id_' + preProcessString(this.name);
  }

  getQIconID() {
    return this.getID() + '_icon';
  }

  toHTML() {
    let html_str = '<span class="sp-shim vs-max"></span>\n';
    html_str = html_str + '<input name="EXT-C-MEMBER" type="hidden" value="N">\n';
    html_str = html_str + '<input   id="'+this.getID()+'" name="EXT-C-MEMBER" type="checkbox" value="Y"> ';
    html_str = html_str + this.name + ' \n';
    html_str = html_str + '<img id="' + this.getQIconID() + '" class="icon-help" src="info.png" alt="info"';
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
    return 'id_' + preProcessString(this.name);
  }

  getQIconID() {
    return this.getID() + '_icon';
  }

  toHTML() {
    let html_str = '<span class="sp-shim vs-max"></span>\n';
    html_str = html_str + '<select id="'+this.getID()+'" name="EXT-D-TRAVEL" title="'+this.tooltip+'">\n';
    for (let option of this.options) {
      html_str = html_str + '<option value="'+preProcessString(option)+'">'+option+'</option>\n';
    }
    html_str = html_str + '</select>\n&nbsp;&nbsp;' + this.name+'\n';
    html_str = html_str + '<img id="' + this.getQIconID() + '" class="icon-help" src="info.png" alt="info"';
    html_str = html_str + 'onclick="show_info(\'' + this.getQIconID() + '\')"\n';
    html_str = html_str + 'title="' + this.title + '">\n';
    return html_str;
  }

  defaultToHTML() {
    return 'document.getElementById(\''+ this.getID() + '\').options['+this.chosen.toString()+'].selected=true;\n';
  }
}
