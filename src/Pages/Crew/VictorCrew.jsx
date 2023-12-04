import React, { useEffect } from "react";
import imgVictor from "../../assets/crew/image-victor-glover.png";
import { useNavigate } from "react-router-dom";

function VictorCrew({ setPage }) {
  const navigate = useNavigate();
  useEffect(() => {
    setPage("crew");
  }, []);
  return (
    <div className="flex flex-col gap-[32px] items-center text-[#FFF] relative w-full min-h-screen px-[24px] pb-[80px] lg:px-[165px] lg:items-start ">
      <p className="uppercase font-barlow md:text-xl md:self-start md:mb-[60px] lg:mb-[155px]">
        <span className="opacity-25 mr-[10px]">01</span> Meet Your Crew
      </p>
      <div className="flex flex-col gap-[32px] items-center md:flex-col-reverse lg:items-start">
        <img
          src={imgVictor}
          alt="Douglas Hurley"
          className="w-[170px] md:w-[450px]  lg:w-[570px] md:absolute md:bottom-0 laptop:bottom-[350px] lg:bottom-0 lg:right-[187px]"
        />
        <div className="flex gap-[10px]">
          <div
            className="w-[10px] h-[10px] rounded-full bg-[#ffffff5e]  cursor-pointer"
            onClick={() => navigate("/crew")}
          ></div>

          <div
            className="w-[10px] h-[10px] rounded-full bg-[#ffffff5e]  cursor-pointer"
            onClick={() => navigate("/crew/mark-shuttleworth")}
          ></div>
          <div className="w-[10px] h-[10px] rounded-full bg-[#FFF]  cursor-pointer"></div>
          <div
            className="w-[10px] h-[10px] rounded-full bg-[#ffffff5e]  cursor-pointer"
            onClick={() => navigate("/crew/anousheh-ansari")}
          ></div>
        </div>
        <div className="flex flex-col items-center md:gap-[16px] lg:items-start">
          <span className="uppercase text-base text-[#FFF] opacity-50 font-bellefair md:text-[24px]">
            PILOT
          </span>
          <h1 className="text-[#FFF] text-2xl font-bellefair uppercase mb-[16px] md:text-[40px]">
            Victor Glover
          </h1>
          <p className="text-base text-[#D0D6F9] text-center font-barlow leading-[25px] md:leading-[28px] md:w-[458px] lg:text-start lg:mb-[120px]">
            Pilot on the first operational flight of the SpaceX Crew Dragon to
            the International Space Station. Glover is a commander in the U.S.
            Navy where he pilots an F/A-18.He was a crew member of Expedition
            64, and served as a station systems flight engineer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VictorCrew;
