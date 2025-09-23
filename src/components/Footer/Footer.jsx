import React from "react";
import bgImg from "../../assets/bg-shadow.png";

const Footer = () => {
  return (
    <div>
      <div className="border-3 border-amber-100 p-4 rounded-xl bg-[#FFFFFF15]">
        <div
          className="flex flex-col  gap-2 items-center justify-center bg-white py-20 bg-cover bg-center rounded-xl border border-gray-200"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <h2 className="font-bold text-4xl">Subscribe to our Newsletter</h2>
          <h5 className="text-xl">
            Get the latest updates and news right in your inbox!
          </h5>
          <div className="flex mt-2 gap-1">
            <input
              className="border-2 border-gray-200 rounded-lg px-10 py-2"
              type="text"
              placeholder="Enter Your Email"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-pink-400 to-amber-300 rounded-lg cursor-pointer hover:bg-gradient-to-l from-pink-400 to-amber-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div>Footer</div>
    </div>
  );
};

export default Footer;
