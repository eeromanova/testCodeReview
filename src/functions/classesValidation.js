import renderEvalResult from "./common/renderEvalResult";

let result = "";
const task1 = (value) => {
  if ("name" in value && "surname" in value) {
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
  if ("brand" in value && "model" in value && "year" in value) {
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
  if ("width" in value && "height" in value) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task6 = (value, code) => {
  console.log(typeof value);
  if (typeof value === "number" && !isNaN(value) && code.includes("getArea")) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task7 = (value) => {
  if ("radius" in value) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task8 = (value, code) => {
  if (value === 28.26 && code.includes("calculateArea")) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task9 = (value) => {
  if ("name" in value && "age" in value && "grade" in value) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task10 = (value, code) => {
  if (value === 3 && code.includes("increaseGrade")) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task11 = (value) => {
  if ("title" in value && "author" in value && "year" in value) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task12 = (value, code) => {
  if (
    value === "Выразительный Javascript - Марейн Хавербек" &&
    code.includes("getTitleAndAuthor")
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task13 = (value) => {
  if ("accountNumber" in value && "balance" in value) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task14 = (value, code) => {
  if (typeof value === "number" && code.includes("deposit")) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task15 = (value, code) => {
  if (value === "Недостаточно средств" && code.includes("account.withdraw()")) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task16 = (value) => {
  if ("name" in value && "sound" in value) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task17 = (value, code) => {
  if (typeof value === "string" && code.includes("animal.makeSound()")) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task18 = (value) => {
  if ("x" in value && "y" in value) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task19 = (value, code) => {
  if (
    typeof value === "number" &&
    !isNaN(value) &&
    code.includes("point.getDistance()")
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task20 = (value, code) => {
  if (
    value === 6 &&
    code.includes("calc.add") &&
    code.includes("calc.subtract") &&
    code.includes("calc.multiply") &&
    code.includes("calc.divide")
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};

const task21 = (value, code) => {
  if (
    value === "Josh, 43, London" &&
    code.includes("person.name") &&
    code.includes("person.age") &&
    code.includes("person.city")
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task22 = (value, code) => {
  if (
    value === "New York" &&
    code.includes("person.changeCity") &&
    code.includes("person.city")
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task23 = (value, code) => {
  if (
    value === "Frank salary: 275000, Josh salary: 13800" &&
    code.includes("bind") &&
    code.includes("employeeApple.calculateBonus")
  ) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task24 = (value, code) => {
  if (typeof value === "string" && code.includes("product.displayInfo")) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task25 = (value, code) => {
  if (value === 50 && code.includes("product.calculateTotalPrice")) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
const task26 = (value, code) => {
  if (value === 12 && code.includes("triangle.calculatePerimeter")) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};

export default function classes(value, taskIndex) {
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
    case 5:
      task6(consoleValue);
      break;
    case 6:
      task7(consoleValue);
      break;
    case 7:
      task8(consoleValue, value);
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
      task12(consoleValue, value);
      break;
    case 12:
      task13(consoleValue);
      break;
    case 13:
      task14(consoleValue, value);
      break;
    case 14:
      task15(consoleValue, value);
      break;
    case 15:
      task16(consoleValue);
      break;
    case 16:
      task17(consoleValue, value);
      break;
    case 17:
      task18(consoleValue);
      break;
    case 18:
      task19(consoleValue, value);
      break;
    case 19:
      task20(consoleValue, value);
      break;
    case 20:
      task21(consoleValue, value);
      break;
    case 21:
      task22(consoleValue, value);
      break;
    case 22:
      task23(consoleValue, value);
      break;
    case 23:
      task24(consoleValue, value);
      break;
    case 24:
      task25(consoleValue, value);
      break;
    case 25:
      task26(consoleValue, value);
      break;
  }

  return {
    valid: result,
    message: result
      ? "Ура! Задание выполнено верно!"
      : "Что-то пошло не так, попробуй еще раз. Проверь, выполнены ли все условия задачи",
  };
}
