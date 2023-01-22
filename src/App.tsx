import "./App.css";
import { AnalogClock } from "./components/AnalogClock";
import { DigitalClock } from "./components/DigitalClock";
import { useTime } from "./hooks/useTime";

function App() {
  const timenow = useTime();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AnalogClock time={timenow} />
      <DigitalClock time={timenow} />
    </div>
  );
}

export default App;
