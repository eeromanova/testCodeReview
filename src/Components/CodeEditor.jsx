import { Editor } from "@monaco-editor/react";
import styles from "./CodeBox.module.css";
import { useState } from "react";
import Output from "./Output";

export default function CodeEditor() {
  const LANGUAGE = "javascript";
  const LANGUAGE_VERSION = "18.15.0";
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <div>
        <p>{LANGUAGE}</p>
        <Editor
          height="90vh"
          width="50vw"
          defaultLanguage={LANGUAGE}
          defaultValue="// some comment"
          onChange={(value) => setValue(value)}
          value={value}
        />
      </div>

      <Output code={value} language={LANGUAGE} version={LANGUAGE_VERSION} />
    </div>
  );
}
