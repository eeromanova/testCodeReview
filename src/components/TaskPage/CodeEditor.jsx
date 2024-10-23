import { Editor } from "@monaco-editor/react";
import styles from "./CodeBox.module.css";
import { useState } from "react";
import Output from "./Output";
import classes from "../../tasks/classes.json";
import dates from "../../tasks/dates.json";

export default function CodeEditor({ theme }) {
  const allTasks = { classes: classes, dates: dates };
  const tasks = allTasks[theme];
  const LANGUAGE = "javascript";
  const LANGUAGE_VERSION = "18.15.0";
  const [task, setTask] = useState(0);
  const [value, setValue] = useState(tasks[task].defaultValue);

  const taskNext = () => {
    if (task !== tasks.length - 1) {
      setTask(task + 1);
      setValue(tasks[task + 1].defaultValue);
    }
  };
  const taskPrev = () => {
    if (task !== 0) {
      setTask(task - 1);
      setValue(tasks[task - 1].defaultValue);
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
            theme={theme}
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
