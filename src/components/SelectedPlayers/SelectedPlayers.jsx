import React from "react";

import SelectedPlayer from "./SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({
  purchasedPlayer,
  removePurchasedPlayer,
  className,
  setToggle,
}) => {
  return (
    <div className={className}>
      {purchasedPlayer.map((playerInfo) => (
        <SelectedPlayer
          key={playerInfo.id}
          playerInfo={playerInfo}
          removePurchasedPlayer={removePurchasedPlayer}
        ></SelectedPlayer>
      ))}
      <button
        onClick={() => setToggle(true)}
        className="border px-5 py-3 rounded-xl mt-4 cursor-pointer font-bold hover:bg-amber-200"
      >
        Add More Players
      </button>
    </div>
  );
};

export default SelectedPlayers;
