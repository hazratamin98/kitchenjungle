import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-[#F7F6F2] flex md:flex-row sm:flex-col md:text-center sm:text-center   py-14 justify-center justify-around ">
      <div>
        <h1 className="font-semibold text-xl">Subcribe to our Newsletter</h1>
        <p>Get e-mail updates about our latest shops and special offers</p>
      </div>
      <div className="">
        <input
          id="email-address"
          name="email"
          type="emaial"
          autocomplete="email"
          class=" text-center w-80  placeholder-gray-500 py-2  text-gray-900  "
          placeholder="Email address"
        />
        <button className="bg-red-300 text-center py-2 px-2">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
