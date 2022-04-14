import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

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
    <Card variant="outlined">
      <CardContent>
        <div className="chickenCheck">
          <p> {message}</p>
        </div>
      </CardContent>
      <CardActions>
        <div>
          <button onClick={onYesClicked}> Yes </button>
          <button onClick={onNoClicked}> NO </button>
        </div>
      </CardActions>
    </Card>
  );
};

export default ChickenCheck;
