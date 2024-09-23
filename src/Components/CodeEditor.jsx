import { Editor } from "@monaco-editor/react";
import styles from "./CodeBox.module.css";
import { useState } from "react";
import Output from "./Output";
import tasks from "../tasks.json";

export default function CodeEditor() {
  const LANGUAGE = "javascript";
  const LANGUAGE_VERSION = "18.15.0";
  const [value, setValue] = useState("");
  const [task, setTask] = useState(0);

  const taskNext = () => {
    if (task !== tasks.length - 1) {
      setTask(task + 1);
      setValue("");
    }
  };
  const taskPrev = () => {
    if (task !== 0) {
      setTask(task - 1);
      setValue("");
    }
    return;
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.taskcontainer}>
          <h2 className={styles.taskheader}>{tasks[task].name}</h2>
          <p className={styles.tasktext}>{tasks[task].text}</p>
        </div>
        <div className={styles.codecontainer}>
          <Editor
            defaultLanguage={LANGUAGE}
            defaultValue={tasks[task].defaultValue}
            onChange={(value) => setValue(value)}
            value={value}
          />
        </div>
        <div className={styles.answercontainer}>
          <Output
            code={value}
            language={LANGUAGE}
            version={LANGUAGE_VERSION}
            taskIndex={task}
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={taskPrev}>Предыдущая задача</button>
        <button onClick={taskNext}>Следующая задача</button>
      </div>
    </>
  );
}
