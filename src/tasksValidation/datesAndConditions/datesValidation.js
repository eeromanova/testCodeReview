import renderEvalResult from "../common/renderEvalResult";
import checkIfElse from "../common/checkIfElse";
import checkSwitchCase from "../common/checkSwitchCase";

let result = "";
const task1 = () => {
  const currentDate = new Date();
  result = currentDate;
  return result;
};
const task2 = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  result = currentYear;
  return result;
};
const task3 = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  result = currentMonth + 1;
  return result;
};
const task4 = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  result = currentDay;
  return result;
};

const task6 = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const futureDate = new Date(currentYear, currentMonth + 1, currentDay + 10);
  result = futureDate;
  return result;
};

const task7 = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const futureDate = new Date(currentYear, currentMonth + 1, currentDay + 10);
  result = Math.ceil((futureDate - currentDate) / (1000 * 60 * 60 * 24));
  return result;
};
const task9 = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const pastDate = new Date(currentYear, currentMonth, currentDay - 5);
  result = `Разница в днях: ${Math.ceil(
    (currentDate - pastDate) / (1000 * 60 * 60 * 24)
  )}`;
  return result;
};

const task10 = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const nextWeek = new Date(currentYear, currentMonth, currentDay + 7);
  result = nextWeek;
  return result;
};
const task11 = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const nextWeek = new Date(currentYear, currentMonth, currentDay + 7);
  const options = { weekday: "long" };
  result = nextWeek.toLocaleString("ru-en", options);
  return result;
};
const task12 = () => {
  const currentDate = new Date();
  result = currentDate.getFullYear() + 5;
  return result;
};

const task14 = () => {
  const currentDate = new Date();
  const futureYear = currentDate.getFullYear() + 1;
  result = futureYear - currentDate.getFullYear();
  return result;
};
const task16 = () => {
  const strDate = "2023-06-15T08:30:00.000Z";
  result = Date.parse(strDate);
  return result;
};
const task17 = () => {
  result = "Правильный формат даты";
  return result;
};

const taskAnswerTrue = () => {
  result = "true";
  return result;
};
const taskAnswerFalse = () => {
  result = "false";
  return result;
};
const task27 = () => {
  result = "Среда";
  return result;
};
const task28 = () => {
  result = "Запад";
  return result;
};

export default function task(value, taskIndex) {
  const consoleValue = renderEvalResult(value);
  let checkKeyWords;
  switch (taskIndex) {
    case 0:
      task1();
      break;
    case 1:
      task2();
      break;
    case 2:
      task3();
      break;
    case 3:
      task4();
      break;
    case 5:
      task6();
      break;
    case 6:
      task7();
      break;
    case 8:
      task9();
      break;
    case 9:
      task10();
      break;
    case 10:
      task11();
      break;
    case 11:
      task12();
      break;
    case 13:
      task14();
      break;
    case 15:
      task16();
      break;
    case 16:
      task17();
      break;
    case 17:
      checkKeyWords = checkIfElse(value, 2);
      if (!checkKeyWords) {
        result = "false";
      } else {
        taskAnswerTrue();
      }
      break;
    case 18:
      checkKeyWords = checkIfElse(value, 2);
      if (!checkKeyWords) {
        result = "false";
      } else {
        taskAnswerFalse();
      }
      break;
    case 19:
      checkKeyWords = checkIfElse(value, 2);
      if (!checkKeyWords) {
        result = "false";
      } else {
        taskAnswerTrue();
      }
      break;
    case 20:
      checkKeyWords = checkIfElse(value, 2);
      if (!checkKeyWords) {
        result = "false";
      } else {
        taskAnswerFalse();
      }
      break;
    case 21:
      checkKeyWords = checkIfElse(value, 2);
      if (!checkKeyWords) {
        result = "false";
      } else {
        taskAnswerFalse();
      }
      break;
    case 22:
      checkKeyWords = checkIfElse(value, 2);
      if (!checkKeyWords) {
        result = "false";
      } else {
        taskAnswerTrue();
      }
      break;
    case 23:
      checkKeyWords = checkIfElse(value, 2);
      if (!checkKeyWords) {
        result = "false";
      } else {
        taskAnswerTrue();
      }
      break;
    case 24:
      checkKeyWords = checkIfElse(value, 2);
      if (!checkKeyWords) {
        result = "false";
      } else {
        taskAnswerTrue();
      }
      break;
    case 25:
      checkKeyWords = checkIfElse(value, 2);
      if (!checkKeyWords) {
        result = "false";
      } else {
        taskAnswerTrue();
      }
      break;
    case 26:
      checkKeyWords = checkSwitchCase(value, 8);
      if (!checkKeyWords) {
        result = "false";
      } else {
        task27();
      }
      break;
    case 27:
      checkKeyWords = checkSwitchCase(value, 5);
      if (!checkKeyWords) {
        result = "false";
      } else {
        task28();
      }
      break;
  }

  const isResultValid =
    consoleValue.toString() === result.toString() &&
    consoleValue.toString() !== `Invalid Date`;

  const isObjectValid =
    typeof consoleValue === "object" &&
    consoleValue.toString() !== `Invalid Date`;

  return {
    valid: result === "" ? isObjectValid : isResultValid,
    message:
      (result === "" && isObjectValid) || isResultValid
        ? "Ура! Задание выполнено верно!"
        : "Что-то пошло не так, попробуй еще раз",
    resultText: consoleValue.toString(),
  };
}
