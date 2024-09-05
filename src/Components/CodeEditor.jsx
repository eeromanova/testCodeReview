import { Editor } from "@monaco-editor/react";
import styles from "./CodeBox.module.css";
import { useState } from "react";
import Output from "./Output";
import tasks from "../tasks.json";

export default function CodeEditor({ taskIndex }) {
  const LANGUAGE = "javascript";
  const LANGUAGE_VERSION = "18.15.0";
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.taskcontainer}>
        <h2 className={styles.taskheader}>{tasks[taskIndex].name}</h2>
        <p className={styles.tasktext}>{tasks[taskIndex].text}</p>
      </div>
      <div className={styles.codecontainer}>
        <Editor
          defaultLanguage={LANGUAGE}
          defaultValue={tasks[taskIndex].defaultValue}
          onChange={(value) => setValue(value)}
          value={value}
        />
      </div>
      <div className={styles.answercontainer}>
        <Output
          code={value}
          language={LANGUAGE}
          version={LANGUAGE_VERSION}
          taskIndex={taskIndex}
        />
      </div>
    </div>
  );
}
