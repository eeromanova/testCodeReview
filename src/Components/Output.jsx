import ExecuteCode from "./api";
import { useState } from "react";
// import styles from "./CodeBox.module.css";
import task10 from "./task_10";

export default function Output({ code, language, version }) {
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const checkValid = async () => {
    try {
      const { message } = task10(code);
      setMessage(message);
    } catch (e) {
      console.log(e);
    }
  };
  const runCode = async () => {
    setError(null);
    setOutput(null);
    setMessage("");
    if (!code) return;
    try {
      const { run: result } = await ExecuteCode(language, version, code);
      if (result.stderr !== "") {
        setMessage(`Что-то пошло не так! Сообщение об  ошибке:`);
        setError(result.stderr);
      } else {
        await checkValid();
        setOutput(result.output);
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
            <p>{message}</p>
          </>
        )}
        {error && (
          <>
            <p>{message}</p>
            <p>{error}</p>
          </>
        )}
      </div>
    </>
  );
}
