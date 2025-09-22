import React, { use } from "react";
import AvailablePlayer from "./AvailablePlayer/AvailablePlayer";

const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
}) => {
  const playerData = use(playersPromise);
  // console.log(playerData);
  return (
    <div className="max-w-[1220px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {playerData.map((player) => (
        <AvailablePlayer
          key={player.id}
          player={player}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
        ></AvailablePlayer>
      ))}
    </div>
  );
};

export default AvailablePlayers;
