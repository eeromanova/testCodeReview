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

let result = '';
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
const task5 = () => {
  return;
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
const task8 = () => {
  return;
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

export default function task(value, taskIndex) {
  const consoleValue = renderEvalResult(value);
  console.log(taskIndex);
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
    case 4:
      task5();
      break;
    case 5:
      task6();
      break;
    case 6:
      task7();
      break;
    case 7:
      task8();
      break;
    case 8:
      task9();
      break;
    case 9:
      task10();
      break;
  }
  const isResultValid =
    consoleValue.toString() === result.toString() &&
    consoleValue.toString() !== `Invalid Date`;
  const isObjectValid =
    typeof consoleValue === "object" &&
    consoleValue.toString() !== `Invalid Date`;

  return {
    valid: result === '' ? isObjectValid : isResultValid,
    message:
      isObjectValid || isResultValid
        ? "Ура! Задание выполнено верно!"
        : "Что-то пошло не так, попробуй еще раз",
    resultText: consoleValue.toString(),
  };
}
