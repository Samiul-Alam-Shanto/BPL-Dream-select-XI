import React from "react";
import logo from "../../assets/logo.png";
import coinImg from "../../assets/dollar.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-[1220px] mx-auto flex flex-col md:flex-row">
      <div className="flex-1">
        <a className=" text-xl">
          <img className="w-[60px] h-[60px]" src={logo} alt="" />
        </a>
      </div>
      <div className="flex gap-4 flex-col md:flex-row  items-center">
        <div>
          <ol className="flex gap-4 text-gray-600">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Fixture</a>
            </li>
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Schedules</a>
            </li>
          </ol>
        </div>
        <div className="flex gap-1 btn items-center">
          <span>6000000000</span>
          <span>Coins</span>
          <img className="w-[20px] h-[20px]" src={coinImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
