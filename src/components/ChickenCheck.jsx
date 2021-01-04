import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

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
