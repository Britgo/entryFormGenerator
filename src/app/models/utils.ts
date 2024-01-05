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
