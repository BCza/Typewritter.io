import React from "react";
// import "./App.css";

const ChickenCheck = ({
  showChickenCheck,
  message,
  onYesClicked,
  onNoClicked,
}) => {
  if (!showChickenCheck) {
    return null;
  }

  return (
    <div className="chickenCheck" style={{ border: 4, borderColor: "green" }}>
      <p> {message}</p>
      <button onClick={onYesClicked}> Yes </button>
      <button onClick={onNoClicked}> NO </button>
    </div>
  );
};

export default ChickenCheck;
