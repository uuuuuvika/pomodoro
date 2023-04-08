import "./App.css";
import Break from "./components/break";
import Session from "./components/session";
import Timer from "./components/timer";
import Controls from "./components/controls";

function App() {
  return (
    <div className="App">
      <div className="break-session">
        <Break />
        <Session />
      </div>
      <Timer />
      <Controls />
    </div>
  );
}

export default App;
