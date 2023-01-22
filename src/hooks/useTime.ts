import { useEffect, useState } from "react";
import { Time } from "../data/Time";

export function useTime(): Time {
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

  return timenow;
}
