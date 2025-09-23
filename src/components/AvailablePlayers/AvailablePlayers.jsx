import React, { use } from "react";
import AvailablePlayer from "./AvailablePlayer/AvailablePlayer";

const AvailablePlayers = ({
  className,
  playersPromise,
  setAvailableBalance,
  availableBalance,
  purchasedPlayer,
  setPurchasedPlayer,
}) => {
  const playerData = use(playersPromise);
  // console.log(playerData);
  return (
    <div
      className={`max-w-[1220px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 ${className} pb-30`}
    >
      {playerData.map((player) => {
        const isSelected = purchasedPlayer.includes(player);
        return (
          <AvailablePlayer
            isSelected={isSelected}
            purchasedPlayer={purchasedPlayer}
            setPurchasedPlayer={setPurchasedPlayer}
            key={player.id}
            player={player}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
          ></AvailablePlayer>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
