import Monster from "./Monster";
import { MonsterContext, initialMonsterState } from "./MonsterState";
import "./App.css";

function App() {
  return (
    <MonsterContext.Provider value={initialMonsterState}>
      <div className="main">
        <h1>Demo</h1>
        <Monster />
      </div>
    </MonsterContext.Provider>
  );
}

export default App;
