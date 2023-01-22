import { Time } from "../data/Time";

type DigitalClockProps = {
  time: Time;
};
export function DigitalClock(props: DigitalClockProps) {
  const hour = props.time.hour > 10 ? props.time.hour : `0${props.time.hour}`;
  const minute =
    props.time.minute > 10 ? props.time.minute : `0${props.time.minute}`;
  const second =
    props.time.second > 10 ? props.time.second : `0${props.time.second}`;
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        fontSize: "40px",
        padding: "6px 12px",
        margin: "24px",
        fontFamily: "Alarm Clock",
      }}
    >
      {hour}:{minute}:{second}
    </div>
  );
}
