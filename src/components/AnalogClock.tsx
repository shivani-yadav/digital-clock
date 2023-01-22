import { Time } from "../data/Time";

type AnalogClockProps = {
  time: Time;
};

const TOTAL_ANGLE = 360;
const INITIAL_ROTATION = 90;

export function AnalogClock({ time }: AnalogClockProps) {
  const hourAngle = INITIAL_ROTATION + (time.hour / 12) * TOTAL_ANGLE;
  const minAngle = INITIAL_ROTATION + (time.minute / 60) * TOTAL_ANGLE;
  const secondAngle = INITIAL_ROTATION + (time.second / 60) * TOTAL_ANGLE;

  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        background: "linear-gradient(to bottom, black 60%, #C0C0C0 40%)",
        borderRadius: "50%",
        margin: "16px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
          width: "90%",
          height: "90%",
          borderRadius: "100%",
        }}
      >
        <div
          id="sec"
          style={{
            width: "45%",
            right: "50%",
            height: "2px",
            background: "white",
            position: "absolute",
            top: "50%",
            borderRadius: "6px",
            transformOrigin: "100%",
            transform: `rotate(${secondAngle}deg)`,
          }}
        ></div>
        <div
          id="min"
          style={{
            width: "40%",
            right: "50%",
            height: "3px",
            background: "white",
            position: "absolute",
            top: "50%",
            borderRadius: "6px",
            transformOrigin: "100%",
            transform: `rotate(${minAngle}deg)`,
          }}
        ></div>
        <div
          id="hour"
          style={{
            width: "30%",
            right: "50%",
            height: "6px",
            background: "white",
            position: "absolute",
            top: "50%",
            borderRadius: "6px",
            transformOrigin: "100%",
            transform: `rotate(${hourAngle}deg)`,
          }}
        ></div>
      </div>
    </div>
  );
}
