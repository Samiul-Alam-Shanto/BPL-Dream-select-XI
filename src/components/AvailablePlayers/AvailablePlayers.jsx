import React, { use } from "react";
import AvailablePlayer from "./AvailablePlayer/AvailablePlayer";

const AvailablePlayers = ({ playersPromise }) => {
  const playerData = use(playersPromise);
  // console.log(playerData);
  return (
    <div className="grid grid-cols-3 gap-4 mt-5">
      {playerData.map((player) => (
        <AvailablePlayer key={player.id} player={player}></AvailablePlayer>
      ))}
    </div>
  );
};

export default AvailablePlayers;
