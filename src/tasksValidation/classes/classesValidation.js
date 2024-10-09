import renderEvalResult from "../common/renderEvalResult";

let result = "";
const task1 = (value) => {
  if (value.name !== undefined && value.surname !== undefined) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task2 = (value) => {
  if (typeof value === "string" && value.includes(",")) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task3 = (value) => {
  if (
    value.brand !== undefined &&
    value.model !== undefined &&
    value.year !== undefined
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task4 = (value, code) => {
  if (typeof value === "number" && code.includes("new Date")) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task5 = (value) => {
  if (value.width !== undefined && value.height !== undefined) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};

export default function task(value, taskIndex) {
  const consoleValue = renderEvalResult(value);
  console.log(consoleValue);
  switch (taskIndex) {
    case 0:
      task1(consoleValue);
      break;
    case 1:
      task2(consoleValue);
      break;
    case 2:
      task3(consoleValue);
      break;
    case 3:
      task4(consoleValue, value);
      break;
    case 4:
      task5(consoleValue, value);
      break;
  }
  // const isResultValid = consoleValue.toString() === result.toString();

  // const isObjectValid = typeof consoleValue === "object";

  return {
    valid: result,
    message: result
      ? "Ура! Задание выполнено верно!"
      : "Что-то пошло не так, попробуй еще раз",
    resultText: consoleValue.toString(),
  };
}
