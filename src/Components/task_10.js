function evalFunction(value) {
  let result;
  const originalLog = console.log;
  console.log = (output) => {
    result = output;
  };
  const fn = new Function(value);
  fn();
  console.log = originalLog;
  return result;
}
function renderEvalResult(value) {
  let consoleValue;
  try {
    consoleValue = evalFunction(value);
    console.log(consoleValue);
  } catch (e) {
    consoleValue = e.toString();
  }

  return consoleValue;
}
export default function task10(value) {
  const consoleValue = renderEvalResult(value);

  const isObjectValid =
    typeof consoleValue === "object" &&
    consoleValue.toString() !== `Invalid Date`;

  return {
    valid: isObjectValid,
    message: isObjectValid
      ? "Ура! Задание выполнено верно!"
      : "Что-то пошло не так, попробуй еще раз",
    resultText: consoleValue.toString(),
  };
}
