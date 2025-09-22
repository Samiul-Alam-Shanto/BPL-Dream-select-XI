import React from "react";

import SelectedPlayer from "./SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ purchasedPlayer, removePurchasedPlayer }) => {
  return (
    <div>
      {purchasedPlayer.map((playerInfo) => (
        <SelectedPlayer
          key={playerInfo.id}
          playerInfo={playerInfo}
          removePurchasedPlayer={removePurchasedPlayer}
        ></SelectedPlayer>
      ))}
    </div>
  );
};

export default SelectedPlayers;
