import React from "react";
import bgImg from "../../assets/bg-shadow.png";
import footerImg from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <div className="relative md:mt-28">
      <div className="w-[80%] mx-auto border-3 border-amber-100 p-4 mb-5 rounded-xl bg-[#FFFFFF15] md:absolute  md:-top-48 md:right-[10%]">
        <div
          className="flex flex-col  gap-2 items-center justify-center bg-white py-20 px-2 bg-cover bg-center rounded-xl border border-gray-200"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <h2 className="font-bold text-4xl text-center">
            Subscribe to our Newsletter
          </h2>
          <h5 className="text-xl text-center">
            Get the latest updates and news right in your inbox!
          </h5>
          <div className="flex flex-col sm:flex-row  mt-2 gap-1">
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
      <div className="bg-black flex flex-col justify-center items-center pt-40">
        <div>
          <img src={footerImg} alt="" />
        </div>

        <footer className="grid grid-cols-1 gap-5   md:grid-cols-3  text-gray-300 p-10">
          <nav>
            <h6 className="font-semibold text-white">About Us</h6>
            <p>
              We are a passionate team <br /> dedicated to providing the best
              <br />
              services to our customers.
            </p>
          </nav>

          <nav>
            <h6 className="font-semibold text-white">Quick Links</h6>
            <ol className="list-disc ml-5">
              <li>
                <a className="link link-hover">Home</a>
              </li>
              <li>
                <a className="link link-hover">Service</a>
              </li>
              <li>
                <a className="link link-hover">About</a>
              </li>
              <li>
                <a className="link link-hover">Contact</a>
              </li>
            </ol>
          </nav>
          <form>
            <h6 className="font-semibold text-white">Subscribe</h6>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <fieldset>
              <div className="join mt-4">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered  rounded-l-xl"
                />
                <button className="btn bg-gradient-to-r from-amber-200 to-orange-300  rounded-r-xl">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>

        <div className="border-t-2 w-full">
          <p className="py-4 text-gray-400  text-center">
            @2025 Your Company All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
