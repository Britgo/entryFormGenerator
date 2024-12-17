const ALLOWED_CHARACTERS= "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789"

export function capitalizeString(input: string) {
  if (input.length === 0) {
    return input;
  }
  let output = input;

  return output.charAt(0).toUpperCase() + output.slice(1);
}

export function capitalizeAll(input: string): string {
  let l = input.split(' ');
  l = l.map(capitalizeString);
  return l.join(' ')
}

export function sanitizeString(input: string, spaceReplacement: string = '_', allowedSpecialCharacters: string = '') {
  let output = '';
  for (let char of input) {
    if (ALLOWED_CHARACTERS.indexOf(char) !== -1  || allowedSpecialCharacters.indexOf(char) !== -1) {
      output = output + char;
    } else {
      if (char === ' ') {
        output = output + spaceReplacement;
      }
    }
  }
  return output
}

export function joinStringArray(string_array: string[], separator: string = ' '): string {
  if (string_array.length === 0) {
    return '';
  }

  let output = string_array[0];
  let skipped_first = false;
  for (let str of string_array) {
    if (!skipped_first) {
      skipped_first = true;
    } else {
      output = output + separator + str;
    }
  }
  return output;
}

export function processStringForInfoMessage(message: string) {
  return message.replaceAll('\n', '<br><br>');
}

export function processStringForTooltip(message: string) {
  return message;
  // return message.replaceAll('\n', ' &#13; ');
}
