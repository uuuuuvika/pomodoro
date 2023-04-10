import "./App.css";
import Break from "./components/break";
import Session from "./components/session";
import Timer from "./components/timer";
import Controls from "./components/controls";

const App: React.FC = () => {
  return (
    <div className="App rounded-full drop-shadow-md font-mono">
      {/* <div className="break-session">
        <Break />
        <Session />
      </div> */}
      <Timer />
      {/* <Controls /> */}
    </div>
  );
}

export default App;
