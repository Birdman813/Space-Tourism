import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LaunchVehicle({ setPage }) {
  const navigate = useNavigate();
  useEffect(() => {
    setPage("technology");
  }, []);
  return (
    <div className="flex flex-col items-center gap-[32px] px-[24px] relative pb-[56px] lg:pl-[165px]">
      <p className="font-barlow text-[#FFF] tracking-[2.7px] uppercase md:self-start md:text-xl lg:mb-[137px]">
        <span className="opacity-25 mr-[10px]">03</span>
        Space Launch 101
      </p>
      <div className="w-screen h-[170px] md:h-[310px] bg-cover lg:w-[515px] lg:h-[527px] launch-img lg:absolute lg:right-0"></div>
      <div className="lg:flex lg:gap-[80px] lg:self-start">
        <div className="flex gap-[16px] justify-center mb-[26px] lg:flex-col lg:gap-[32px]">
          <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] md:text-[24px] rounded-full bg-[#FFF] flex items-center justify-center font-bellefair cursor-pointer">
            1
          </div>
          <div
            className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] cursor-pointer  md:text-[24px] rounded-full  bg-transparent border border-solid border-[#ffffff60] text-[#FFF] flex items-center justify-center font-bellefair"
            onClick={() => navigate("/technology/spaceport")}
          >
            2
          </div>
          <div
            className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] cursor-pointer md:text-[24px] rounded-full  bg-transparent border border-solid border-[#ffffff60] text-[#FFF] flex items-center justify-center font-bellefair"
            onClick={() => navigate("/technology/space-capsule")}
          >
            3
          </div>
        </div>
        <div className="flex flex-col items-center gap-[16px] lg:items-start">
          <span className="text-[#D0D6F9] font-barlow tracking-[2.3px]">
            THE TERMINOLOGY…
          </span>
          <h1 className="text-[#FFF] text-2xl uppercase font-bellefair md:text-[40px]">
            launch vehicle
          </h1>
          <p className="text-center text-[#D0D6F9] leading-[25px] md:leading-[28px] md:w-[458px] lg:text-start">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
      </div>
    </div>
  );
}

export default LaunchVehicle;
