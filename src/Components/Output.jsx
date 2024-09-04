import ExecuteCode from "./api";
import { useState } from "react";
import styles from "./CodeBox.module.css";

export default function Output({ code, language, version }) {
  const [output, setOutput] = useState(null);
  const runCode = async () => {
    if (!code) return;
    try {
      const { run: result } = await ExecuteCode(language, version, code);

      setOutput(result.output);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.output_container}>
      <button onClick={runCode}>Run</button>
      <div>{output}</div>
    </div>
  );
}
