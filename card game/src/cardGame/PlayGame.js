import React from "react";
import CardGame from "./CardGame";

//page where game is played on
function PlayGame() {
  return (
    <div>
      <h2>Choose a card to see if you win!</h2>
      <CardGame></CardGame>
    </div>
  );
}

export default PlayGame;
