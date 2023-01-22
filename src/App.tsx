import { useEffect, useState } from "react";
import "./App.css";
import { AnalogClock } from "./components/AnalogClock";
import { DigitalClock } from "./components/DigitalClock";
import { Time } from "./data/Time";

function App() {
  const getTime = (): Time => {
    const currentDateTime = new Date();
    return {
      hour: currentDateTime.getHours(),
      minute: currentDateTime.getMinutes(),
      second: currentDateTime.getSeconds(),
    };
  };

  const [timenow, setTimenow] = useState<Time>(getTime());

  useEffect(() => {
    // update the timenow data
    const interval = setInterval(() => {
      setTimenow(getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
