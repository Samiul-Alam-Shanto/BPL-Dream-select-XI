import React, { useState } from "react";
import personImg from "../../../assets/Group.png";
import flagImg from "../../../assets/Vector.png";
import { toast } from "react-toastify";

const AvailablePlayer = ({
  player,
  availableBalance,
  setAvailableBalance,
  purchasedPlayer,
  setPurchasedPlayer,
}) => {
  const [selectPlayer, setSelectPlayer] = useState(false);
  const handleSelectPlayer = (playerData) => {
    const playerPrice = Number(playerData.Price.split(",").join(""));
    if (availableBalance < playerPrice) {
      toast("Not Enough Coins");
      return;
    }
    if (purchasedPlayer.length == 6) {
      toast("Maximum Player Selected");
      return;
    }
    setSelectPlayer(true);
    setAvailableBalance(availableBalance - playerPrice);
    const newPurchasedPlayer = [...purchasedPlayer, playerData];
    setPurchasedPlayer(newPurchasedPlayer);
    toast("Player Purchased");
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-sm p-4 ">
        <figure>
          <img
            className="w-full h-[250px] object-cover rounded-xl"
            src={player.Image}
            alt="Shoes"
          />
        </figure>
        <div className="mt-4">
          <div className="flex gap-2">
            <img src={personImg} alt="" />
            <h2 className="card-title">{player.Player_name}</h2>
          </div>
          <div className="flex items-center justify-between mt-2 px-1">
            <div className="flex gap-2 items-center">
              <img className="w-[15px] h-[15px]" src={flagImg} alt="flag" />
              <p>{player.Country}</p>
            </div>
            <button className="btn">{player.Type}</button>
          </div>
          <hr className="mt-2 text-gray-400" />
          <div className="flex items-center justify-between mt-2 px-2">
            <h3 className="font-bold">Rating</h3>
            <p>{player.Rating}</p>
          </div>
          <div className="flex items-center justify-between mt-2 px-2">
            <h3 className="font-semibold">{player.Batting_Style}</h3>
            <h3 className="font-semibold">{player.Bowling_Style}</h3>
          </div>
          <div className="card-actions justify-between items-center mt-2 px-2">
            <h3 className="font-semibold">
              Price : $<span>{player.Price}</span>
            </h3>
            <button
              disabled={selectPlayer}
              onClick={() => handleSelectPlayer(player)}
              className="btn"
            >
              {selectPlayer ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayer;
