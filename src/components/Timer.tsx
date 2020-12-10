import React from "react";
import Timer from "react-compound-timer";

const TotalWritingTimer = () => (
  <Timer
    startImmediately={true}
    // onStart={() => console.log("onStart hook")}
    // onResume={() => console.log("onResume hook")}
    // onPause={() => console.log("onPause hook")}
    // onStop={() => console.log("onStop hook")}
    // onReset={() => console.log("onReset hook")}
  >
    {() => (
      <React.Fragment>
        <div>
          {"Writing Time "}
          <Timer.Hours />:
          <Timer.Minutes />:
          <Timer.Seconds />
        </div>
        {/* <div>{timerState}</div> */}
        <br />
        {/* <div>
          <button onClick={start}>Start</button>
          <button onClick={pause}>Pause</button>
          <button onClick={resume}>Resume</button>
          <button onClick={stop}>Stop</button>
          <button onClick={reset}>Reset</button>
        </div> */}
      </React.Fragment>
    )}
  </Timer>
);

export default TotalWritingTimer;
