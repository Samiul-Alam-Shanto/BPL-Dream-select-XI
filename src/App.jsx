import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/Players.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();

  // state for toggling
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Navbar></Navbar>

      <div className="flex flex-col gap-2 sm:flex-row justify-between items-center max-w-[1220px] mx-auto mt-5">
        <h1 className="font-bold text-2xl">Available Players</h1>
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
            Selected(<span>0</span>)
          </button>
        </div>
      </div>

      {toggle ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
