import "./App.css";
import Break from "./components/break";
import Session from "./components/session";

function App() {
  return (
    <div className="App">
      <div>
        <Break />
        <Session />
      </div>
      <div id="start_stop">start/stop</div>
      <div id="reset">reset</div>
    </div>
  );
}

export default App;
