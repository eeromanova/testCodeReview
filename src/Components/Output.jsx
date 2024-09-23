import ExecuteCode from "./api";
import { useState, useEffect } from "react";
import taskValidation from "./taskValidation";

export default function Output({ code, language, version, taskIndex }) {
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setError("");
    setMessage("");
    setOutput("");
  }, [taskIndex]);
  const checkValid = async () => {
    try {
      const { message } = taskValidation(code, taskIndex);
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
      } else if (result.output !== "") {
        await checkValid();
        setOutput(result.output);
      } else {
        setError(`Что-то пошло не так! Попробуй еще раз`);
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
