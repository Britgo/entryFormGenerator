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

export function sanitizeString(input: string, spaceReplacement: string = '_', allowedSpecialCharacters: string = '') {
  let output = '';
  for (let char of input.toLowerCase()) {
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
