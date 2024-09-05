import "./App.css";
import CodeEditor from "./Components/CodeEditor";
import tasks from './tasks.json';

function App() {
  return (
    <div className="app">

      <CodeEditor taskIndex={1} />
    </div>
  );
}

export default App;
