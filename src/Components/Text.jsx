import React from "react";
import { useNavigate } from "react-router-dom";

function Text({ setPage }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-[16px] px-[24px] md:gap-[24px] lg:mt-[250px] lg:px-[165px] lg:flex-row lg:justify-between">
      <div className="flex flex-col items-center gap-[16px] lg:gap-[24px]">
        <p className="font-barlow text-base text-[#D0D6F9] tracking-[2.7px] md:text-xl">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className="text-[#FFF] text-7xl font-bellefair md:text-[150px]">
          SPACE
        </h1>
        <p className="font-barlow text-[#D0D6F9] text-base text-center leading-[25px] md:leading-[28px] md:text-lg mb-[81px] md:w-[444px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button
        className="w-[150px] h-[150px] rounded-full bg-[#FFF] text-[#0B0D17] text-xl tracking-[1.25px]  font-bellefair md:w-[242px] md:h-[242px]"
        onClick={() => {
          navigate("/destination"), setPage("destination");
        }}
      >
        EXPLORE
      </button>
    </div>
  );
}

export default Text;
