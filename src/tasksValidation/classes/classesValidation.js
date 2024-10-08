import renderEvalResult from "../common/renderEvalResult";

let result = "";
const task1 = () => {};

export default function task(value, taskIndex) {
  const consoleValue = renderEvalResult(value);
  let checkKeyWords;
  switch (taskIndex) {
    case 0:
      task1();
      break;
  }
  const isResultValid =
    consoleValue.toString() === result.toString();

  const isObjectValid =
    typeof consoleValue === "object";

  return {
    valid: result === "" ? isObjectValid : isResultValid,
    message:
      (result === "" && isObjectValid) || isResultValid
        ? "Ура! Задание выполнено верно!"
        : "Что-то пошло не так, попробуй еще раз",
    resultText: consoleValue.toString(),
  };
}
