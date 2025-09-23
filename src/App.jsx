import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { toast, ToastContainer } from "react-toastify";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

const fetchPlayers = async () => {
  const res = await fetch("/Players.json");
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  // state for toggling
  const [toggle, setToggle] = useState(true);

  //state for available balance coins

  const [availableBalance, setAvailableBalance] = useState(500000000);

  //state for selected players

  const [purchasedPlayer, setPurchasedPlayer] = useState([]);

  //using state lifting up

  const removePurchasedPlayer = (p) => {
    setPurchasedPlayer(purchasedPlayer.filter((ply) => ply.id !== p.id));
    toast("Player Removed");
    setAvailableBalance(availableBalance + Number(p.Price.split(",").join("")));
  };

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Banner></Banner>

      <div className="flex flex-col gap-2 sm:flex-row justify-between items-center max-w-[1220px] mx-auto mt-5">
        <h1 className="font-bold text-2xl">
          {toggle
            ? "Available Players"
            : `Selected Player (${purchasedPlayer.length}/6)`}
        </h1>
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`px-5 py-3 border border-gray-400 border-r-0 rounded-l-xl cursor-pointer ${
              toggle ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`px-5 py-3 border border-gray-400 border-l-0 rounded-r-xl cursor-pointer ${
              !toggle ? "bg-[#E7FE29]" : ""
            }`}
          >
            Selected(<span>{purchasedPlayer.length}</span>)
          </button>
        </div>
      </div>

      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <AvailablePlayers
          className={toggle ? "block" : "hidden"}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          playersPromise={playersPromise}
          purchasedPlayer={purchasedPlayer}
          setPurchasedPlayer={setPurchasedPlayer}
        ></AvailablePlayers>

        <SelectedPlayers
          className={toggle ? "hidden" : "block"}
          setToggle={setToggle}
          purchasedPlayer={purchasedPlayer}
          removePurchasedPlayer={removePurchasedPlayer}
        ></SelectedPlayers>
      </Suspense>
      <Footer></Footer>

      <ToastContainer />
    </>
  );
}

export default App;
