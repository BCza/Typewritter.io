import React, {useState} from "react";
import Timer from "react-compound-timer";
import IconButton from '@material-ui/core/IconButton';
import PopOver from '@material-ui/core/Popover';
import AccessTime from '@material-ui/icons/AccessTime';
// import {  } from '@material-ui/core/colors';

const TotalWritingTimer = () => {
  const [isPopOverOpen, setIsPopOverOpen] = useState(false);

  console.log(isPopOverOpen);

  return (
    <div>
      <IconButton onClick={() => setIsPopOverOpen(!isPopOverOpen)}>
        <AccessTime style={{color: '#fafafa'}} fontSize='large'/>
      </IconButton>
      <PopOver open={isPopOverOpen} />
    </div>
  );
};
   // <Timer
  //   startImmediately={true}
  //   // onStart={() => console.log("onStart hook")}
  //   // onResume={() => console.log("onResume hook")}
  //   // onPause={() => console.log("onPause hook")}
  //   // onStop={() => console.log("onStop hook")}
  //   // onReset={() => console.log("onReset hook")}
  // >
  //   {() => (
  //     <React.Fragment>
  //       <div>
  //         {"Writing Time "}
  //         <Timer.Hours />:
  //         <Timer.Minutes />:
  //         <Timer.Seconds />
  //       </div>
  //       {/* <div>{timerState}</div> */}
  //       <br />
  //       {/* <div>
  //         <button onClick={start}>Start</button>
  //         <button onClick={pause}>Pause</button>
  //         <button onClick={resume}>Resume</button>
  //         <button onClick={stop}>Stop</button>
  //         <button onClick={reset}>Reset</button>
  //       </div> */}
  //     </React.Fragment>
  //   )}
  // </Timer>
  // </PopOver>
 

export default TotalWritingTimer;
