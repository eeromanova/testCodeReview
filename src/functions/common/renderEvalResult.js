import evalFunction from "./evalFuncion";
export default function renderEvalResult(value) {
  let consoleValue;
  try {
    consoleValue = evalFunction(value);
    console.log(consoleValue);
  } catch (e) {
    consoleValue = e.toString();
  }
  return consoleValue;
}
