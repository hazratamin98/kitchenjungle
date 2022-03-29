import React from "react";
import Container from "src/components/Container";
import { FcMenu } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";

const Weekly = () => {
  return (
    <Container>
      <div className="text-center space-y-4 py-5">
        <h1 className="text-4xl font-semibold color-black font-sans">
          New this week
        </h1>
        <p className="font-normal text-md">
          These recipes are added to our users weekly
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 py-4 px-6 gap-5">
        <div className="border text-center px-6 hover:shadow-md">
          <img
            className="h-60 w-full "
            src="https://firebasestorage.googleapis.com/v0/b/delightey-55cb2.appspot.com/o/images%2F6F13E57C-7B23-4894-B446-59144DBA49D7.jpeg?alt=media&amp;token=3e68a437-939f-49ea-9d2d-fc918037f801"
            alt="Ants on a log"
          ></img>
          <div className="py-4 space-y-3">
            <span className="text-sm text-[#888888]">By Tim Jacobs</span>
            <h1 className="text-sm text-black">ANTS ON A LOG</h1>
            <div className="flex items-center justify-center gap-3 ">
              <span className="text-white bg-red-700 rounded-full py-2 px-2 hover:hidden  ">
                <FcMenu />
              </span>
              <h1 className="text-red-700 hover:hidden">Vegetarain</h1>
              <span className="bg-red-700 text-white text-lg hover:hidden  rounded-full py-2 px-2">
                <AiOutlineHeart />
              </span>
            </div>
          </div>
        </div>

        <div className="border text-center px-6 hover:shadow-md">
          <img
            className="h-60 w-full "
            src="https://firebasestorage.googleapis.com/v0/b/delightey-55cb2.appspot.com/o/images%2F6F13E57C-7B23-4894-B446-59144DBA49D7.jpeg?alt=media&amp;token=3e68a437-939f-49ea-9d2d-fc918037f801"
            alt="Ants on a log"
          ></img>
          <div className="py-4 space-y-3">
            <span className="text-sm text-[#888888]">By Tim Jacobs</span>
            <h1 className="text-sm text-black">ANTS ON A LOG</h1>
            <div className="flex items-center justify-center gap-3 ">
              <span className="text-white bg-red-700 rounded-full py-2 px-2 hover:hidden  ">
                <FcMenu />
              </span>
              <h1 className="text-red-700 hover:hidden">Vegetarain</h1>
              <span className="bg-red-700 text-white text-lg hover:hidden  rounded-full py-2 px-2">
                <AiOutlineHeart />
              </span>
            </div>
          </div>
        </div>

        <div className="border text-center px-6 hover:shadow-md ">
          <img
            className="h-60 w-full"
            src="https://firebasestorage.googleapis.com/v0/b/delightey-55cb2.appspot.com/o/images%2F6F13E57C-7B23-4894-B446-59144DBA49D7.jpeg?alt=media&amp;token=3e68a437-939f-49ea-9d2d-fc918037f801"
            alt="Ants on a log"
          ></img>
          <div className="py-4 space-y-3">
            <span className="text-sm text-[#888888]">By Tim Jacobs</span>
            <h1 className="text-sm text-black">ANTS ON A LOG</h1>
            <div className="flex items-center justify-center gap-3 ">
              <span className="text-white bg-red-700 rounded-full py-2 px-2 hover:hidden  ">
                <FcMenu />
              </span>
              <h1 className="text-red-700 hover:hidden">Vegetarain</h1>
              <span className="bg-red-700 text-white text-lg hover:hidden  rounded-full py-2 px-2">
                <AiOutlineHeart />
              </span>
            </div>
          </div>
        </div>

        <div className="border text-center px-6 hover:shadow-md">
          <img
            className="h-60 w-full "
            src="https://firebasestorage.googleapis.com/v0/b/delightey-55cb2.appspot.com/o/images%2F6F13E57C-7B23-4894-B446-59144DBA49D7.jpeg?alt=media&amp;token=3e68a437-939f-49ea-9d2d-fc918037f801"
            alt="Ants on a log"
          ></img>
          <div className="py-4 space-y-3">
            <span className="text-sm text-[#888888]">By Tim Jacobs</span>
            <h1 className="text-sm text-black">ANTS ON A LOG</h1>
            <div className="flex items-center justify-center gap-3 ">
              <span className="text-white bg-red-700 rounded-full py-2 px-2 hover:hidden  ">
                <FcMenu />
              </span>
              <h1 className="text-red-700 hover:hidden">Vegetarain</h1>
              <span className="bg-red-700 text-white text-lg hover:hidden  rounded-full py-2 px-2">
                <AiOutlineHeart />
              </span>
            </div>
          </div>
        </div>
        <div className="border text-center px-6 hover:shadow-md">
          <img
            className="h-60 w-full "
            src="https://firebasestorage.googleapis.com/v0/b/delightey-55cb2.appspot.com/o/images%2F6F13E57C-7B23-4894-B446-59144DBA49D7.jpeg?alt=media&amp;token=3e68a437-939f-49ea-9d2d-fc918037f801"
            alt="Ants on a log"
          ></img>
          <div className="py-4 space-y-3">
            <span className="text-sm text-[#888888]">By Tim Jacobs</span>
            <h1 className="text-sm text-black">ANTS ON A LOG</h1>
            <div className="flex items-center justify-center gap-3 ">
              <span className="text-white bg-red-700 rounded-full py-2 px-2 hover:hidden  ">
                <FcMenu />
              </span>
              <h1 className="text-red-700 hover:hidden">Vegetarain</h1>
              <span className="bg-red-700 text-white text-lg hover:hidden  rounded-full py-2 px-2">
                <AiOutlineHeart />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Weekly;
