import ExecuteCode from "./api";
import { useState } from "react";
import styles from "./CodeBox.module.css";
import tasks from "../tasks.json";

export default function Output({ code, language, version, taskIndex }) {
  const answers = tasks[taskIndex].results;
  const preparedCode = code.toString().replace("\n", "");
  const codeArr = preparedCode.split("");
  console.log(answers);
  console.log(codeArr);
  const isCodeHasMustHave = [];
  tasks[taskIndex].marks.forEach((mark) => {
    if (codeArr.includes(mark)) isCodeHasMustHave.push(mark);
  });
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);
  const runCode = async () => {
    setError(null);
    setOutput(null);
    if (!code) return;
    try {
      const { run: result } = await ExecuteCode(language, version, code);
      const results = [result.output];
      console.log(results);
      const isEqual = results.every(
        (element, index) => element === answers[index]
      );
      if (result.stderr !== "") {
        setError(
          `Что-то пошло не так! Сообщение об  ошибке:\n ${result.stderr}`
        );
      } else if (
        isEqual &&
        isCodeHasMustHave.length === tasks[taskIndex].marks.length
      ) {
        console.log("Верный результат");
        setOutput(`Console.log: ${result.output}`);
      } else if (isCodeHasMustHave.length !== tasks[taskIndex].marks.length) {
        setError(
          "В твоем решении выполнены не все требуемые условия. Проверь еще раз задание и попробуй еще!"
        );
      } else if (!isEqual) {
        setError(
          `${result.output}. Полученный результат отличается от нужного. Проверь еще раз задание и попробуй еще!`
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <button onClick={runCode}>Проверить</button>
      <div>
        {output && (
          <>
            <p>{output}</p>
            <p>Поздравляем, ты получила верный результат</p>
          </>
        )}
        {error && (
          <>
            <p>{error}</p>
          </>
        )}
      </div>
    </>
  );
}
