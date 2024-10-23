import renderEvalResult from "./common/renderEvalResult";
import checkIfElse from "./common/checkIfElse";
import checkSwitchCase from "./common/checkSwitchCase";

let result = "";
const task1 = (value) => {
  const finalResult = new Date();
  if (
    value.toString() === finalResult.toString() &&
    value.toString() !== `Invalid Date`
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task2 = (value) => {
  const finalResult = new Date().getFullYear();
  if (
    value.toString() === finalResult.toString() &&
    value.toString() !== `Invalid Date`
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task3 = (value) => {
  const finalResult = new Date().getMonth() + 1;
  if (
    value.toString() === finalResult.toString() &&
    value.toString() !== `Invalid Date`
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task4 = (value) => {
  const finalResult = new Date().getDate();
  if (
    value.toString() === finalResult.toString() &&
    value.toString() !== `Invalid Date`
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};

const task5 = (value) => {
  if (typeof value === "object" && value.toString() !== `Invalid Date`) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};

const task6 = (value) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const finalResult = new Date(currentYear, currentMonth + 1, currentDay + 10);
  if (
    value.toString() === finalResult.toString() &&
    value.toString() !== `Invalid Date`
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};

const task7 = (value) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const futureDate = new Date(currentYear, currentMonth + 1, currentDay + 10);
  const finalResult = Math.ceil(
    (futureDate - currentDate) / (1000 * 60 * 60 * 24)
  );
  if (
    value.toString() === finalResult.toString() &&
    value.toString() !== `Invalid Date`
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task9 = (value) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const pastDate = new Date(currentYear, currentMonth, currentDay - 5);
  const finalResult = `Разница в днях: ${Math.ceil(
    (currentDate - pastDate) / (1000 * 60 * 60 * 24)
  )}`;
  if (
    value.toString() === finalResult.toString() &&
    value.toString() !== `Invalid Date`
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};

const task10 = (value) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const finalResult = new Date(currentYear, currentMonth, currentDay + 7);
  if (
    value.toString() === finalResult.toString() &&
    value.toString() !== `Invalid Date`
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task11 = (value) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const nextWeek = new Date(currentYear, currentMonth, currentDay + 7);
  const options = { weekday: "long" };
  const finalResult = nextWeek.toLocaleString("ru-en", options);
  if (
    value.toString() === finalResult.toString() &&
    value.toString() !== `Invalid Date`
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task12 = (value) => {
  const currentDate = new Date();
  const finalResult = currentDate.getFullYear() + 5;
  if (
    value.toString() === finalResult.toString() &&
    value.toString() !== `Invalid Date`
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};

const task13 = (value) => {
  if (typeof value === "object" && value.toString() !== `Invalid Date`) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};

const task14 = (value) => {
  const currentDate = new Date();
  const futureYear = currentDate.getFullYear() + 1;
  const finalResult = futureYear - currentDate.getFullYear();
  if (
    value.toString() === finalResult.toString() &&
    value.toString() !== `Invalid Date`
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task16 = (value) => {
  const strDate = "2023-06-15T08:30:00.000Z";
  const finalResult = Date.parse(strDate);
  if (
    value.toString() === finalResult.toString() &&
    value.toString() !== `Invalid Date`
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task17 = (value) => {
  const finalResult = "Правильный формат даты";
  if (
    value.toString() === finalResult.toString() &&
    value.toString() !== `Invalid Date`
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};

const taskAnswerTrue = (value) => {
  const finalResult = "true";
  if (
    value.toString() === finalResult.toString() &&
    value.toString() !== `Invalid Date`
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const taskAnswerFalse = (value) => {
  const finalResult = "false";
  if (
    value.toString() === finalResult.toString() &&
    value.toString() !== `Invalid Date`
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task27 = (value) => {
  const finalResult = "Среда";
  if (
    value.toString() === finalResult.toString() &&
    value.toString() !== `Invalid Date`
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task28 = (value) => {
  const finalResult = "Запад";
  if (
    value.toString() === finalResult.toString() &&
    value.toString() !== `Invalid Date`
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};

export default function dates(value, taskIndex) {
  const consoleValue = renderEvalResult(value);
  let checkKeyWords;
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
      task4(consoleValue);
      break;
    case 4:
      task5(consoleValue);
      break;
    case 5:
      task6(consoleValue);
      break;
    case 6:
      task7(consoleValue);
      break;
    case 8:
      task9(consoleValue);
      break;
    case 9:
      task10(consoleValue);
      break;
    case 10:
      task11(consoleValue);
      break;
    case 11:
      task12(consoleValue);
      break;
    case 12:
      task13(consoleValue);
      break;
    case 13:
      task14(consoleValue);
      break;
    case 15:
      task16(consoleValue);
      break;
    case 16:
      task17(consoleValue);
      break;
    case 17:
      checkKeyWords = checkIfElse(value, 2);
      if (!checkKeyWords) {
        result = false;
      } else {
        taskAnswerTrue(consoleValue);
      }
      break;
    case 18:
      checkKeyWords = checkIfElse(value, 2);
      if (!checkKeyWords) {
        result = false;
      } else {
        taskAnswerFalse(consoleValue);
      }
      break;
    case 19:
      checkKeyWords = checkIfElse(value, 2);
      if (!checkKeyWords) {
        result = false;
      } else {
        taskAnswerTrue(consoleValue);
      }
      break;
    case 20:
      checkKeyWords = checkIfElse(value, 2);
      if (!checkKeyWords) {
        result = false;
      } else {
        taskAnswerFalse(consoleValue);
      }
      break;
    case 21:
      checkKeyWords = checkIfElse(value, 2);
      if (!checkKeyWords) {
        result = false;
      } else {
        taskAnswerFalse(consoleValue);
      }
      break;
    case 22:
      checkKeyWords = checkIfElse(value, 2);
      if (!checkKeyWords) {
        result = false;
      } else {
        taskAnswerTrue(consoleValue);
      }
      break;
    case 23:
      checkKeyWords = checkIfElse(value, 2);
      if (!checkKeyWords) {
        result = false;
      } else {
        taskAnswerTrue(consoleValue);
      }
      break;
    case 24:
      checkKeyWords = checkIfElse(value, 2);
      if (!checkKeyWords) {
        result = false;
      } else {
        taskAnswerTrue(consoleValue);
      }
      break;
    case 25:
      checkKeyWords = checkIfElse(value, 2);
      if (!checkKeyWords) {
        result = false;
      } else {
        taskAnswerTrue(consoleValue);
      }
      break;
    case 26:
      checkKeyWords = checkSwitchCase(value, 8);
      if (!checkKeyWords) {
        result = false;
      } else {
        task27(consoleValue);
      }
      break;
    case 27:
      checkKeyWords = checkSwitchCase(value, 5);
      if (!checkKeyWords) {
        result = false;
      } else {
        task28(consoleValue);
      }
      break;
  }

  return {
    valid: result,
    message: result
      ? "Ура! Задание выполнено верно!"
      : "Что-то пошло не так, попробуй еще раз",
  };
}
