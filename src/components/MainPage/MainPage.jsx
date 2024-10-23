import styles from "./MainPage.module.css";
import { useState } from "react";
import CodeEditor from "../TaskPage/CodeEditor";

export default function MainPage() {
  const [theme, setTheme] = useState("");
  const [isTaskPageOpened, setIsTaskPageOpened] = useState(false);
  return !isTaskPageOpened ? (
    <div className={styles.mainPage}>
      <button
        className={styles.button}
        onClick={() => {
          setTheme("classes");
          console.log(theme);
          setIsTaskPageOpened(true);
        }}
      >
        Классы
      </button>
      <button
        className={styles.button}
        onClick={() => {
          setTheme("dates");
          console.log(theme);
          setIsTaskPageOpened(true);
        }}
      >
        Даты
      </button>
    </div>
  ) : (
    <CodeEditor theme={theme} />
  );
}
