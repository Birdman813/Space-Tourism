import React from "react";
import iconX from "../assets/shared/icon-close.svg";
import { useNavigate } from "react-router-dom";

function MobileMenu({ setMobileMenu, setPage }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-[32px] font-barlow text-base text-[#FFF] w-[254px] h-screen p-[32px] backdrop-blur-lg bg-[rgba(255, 255, 255, 0.04)] absolute top-0 right-0">
      <div className="self-end">
        <img src={iconX} alt="close" onClick={() => setMobileMenu(false)} />
      </div>
      <div className="flex flex-col gap-[32px]">
        <p
          className="flex items-center gap-[11px]"
          onClick={() => {
            navigate("/"), setMobileMenu(false), setPage("home");
          }}
        >
          <span className="font-bold">00</span>{" "}
          <span className="tracking-[2.7px]">HOME</span>
        </p>
        <p
          className="flex items-center gap-[11px]"
          onClick={() => {
            navigate("/destination"),
              setMobileMenu(false),
              setPage("destination");
          }}
        >
          <span className="font-bold">01</span>{" "}
          <span className="tracking-[2.7px]">DESTINATION</span>
        </p>
        <p
          className="flex items-center gap-[11px]"
          onClick={() => {
            navigate("/crew"), setMobileMenu(false), setPage("crew");
          }}
        >
          <span className="font-bold">02</span>
          <span className="tracking-[2.7px]">CREW</span>
        </p>
        <p
          className="flex items-center gap-[11px]"
          onClick={() => {
            navigate("technology/launch-vehicle"),
              setMobileMenu(false),
              setPage("technology");
          }}
        >
          <span className="font-bold">03</span>{" "}
          <span className="tracking-[2.7px]">TECHNOLOGY</span>
        </p>
      </div>
    </div>
  );
}

export default MobileMenu;
