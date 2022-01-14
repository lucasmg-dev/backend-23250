const countChars = (string) => {
  return string.length;
};
export const toUpper = (string) => {
  if (countChars(string) > 5) return string.toUpperCase();
  return string;
};
export const toLower = (string) => string.toLowerCase();
