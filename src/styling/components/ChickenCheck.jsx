import React from "react";
// import "./App.css";

const ChickenCheck = ({ showChickenCheck }) => {
  if (showChickenCheck) {
    return (
      <div className="chickenCheck">
        <p> This should render</p>
      </div>
    );
  } else {
    return <div>Nope</div>;
  }
};

export default ChickenCheck;
