export default function checkSwitchCase(value, words) {
  const keyWords = value.match(/(switch|case)/g);
  if (keyWords === null || keyWords.length !== words) {
    return false;
  } else return true;
}
