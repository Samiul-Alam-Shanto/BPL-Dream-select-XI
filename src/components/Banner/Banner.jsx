import React from "react";
import bannerImg from "../../assets/banner-main.png";
import bannerBg from "../../assets/bg-shadow.png";

const Banner = () => {
  return (
    <div
      className="flex flex-col items-center gap-4 mt-5 py-10 bg-[#131313] rounded-xl"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <img src={bannerImg} alt="" />
      <h2 className="font-bold text-white text-4xl">
        Assemble Your Ultimate Dream Cricket Team
      </h2>
      <h5 className="text-gray-300">Beyond Boundaries Beyond Limits</h5>
      <div className="p-2 border-2 rounded-xl border-[#E7FE29] ">
        <button className="bg-[#E7FE29]  border rounded-xl py-4 px-5">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
