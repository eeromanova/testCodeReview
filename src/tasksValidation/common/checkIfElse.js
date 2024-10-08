export default function checkIfElse(value, words) {
  const keyWords = value.match(/(if|else)/g);
  if (keyWords === null || keyWords.length !== words) {
    return false;
  } else return true;
}
