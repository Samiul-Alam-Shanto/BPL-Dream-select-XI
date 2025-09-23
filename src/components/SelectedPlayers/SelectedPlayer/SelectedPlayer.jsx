import React from "react";
import trash from "../../../assets/trash.png";

const SelectedPlayer = ({ playerInfo, removePurchasedPlayer }) => {
  const removePlayer = (playerDetails) => {
    removePurchasedPlayer(playerDetails);
  };
  return (
    <div className=" mt-5 border border-gray-300 rounded-xl p-3 flex items-center justify-between">
      <div className="flex gap-2">
        <img
          className="w-[50px] h-[50px] rounded-xl"
          src={playerInfo.Image}
          alt=""
        />
        <div>
          <h1 className="font-bold">{playerInfo.Player_name}</h1>
          <p>
            <small className="text-gray-500">{playerInfo.Type}</small>
          </p>
        </div>
      </div>
      <div onClick={() => removePlayer(playerInfo)}>
        <img className="cursor-pointer" src={trash} alt="" />
      </div>
    </div>
  );
};

export default SelectedPlayer;
