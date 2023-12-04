import React from "react";
import logo from "../assets/shared/logo.svg";
import hamburgeMenu from "../assets/shared/icon-hamburger.svg";
import { useNavigate } from "react-router-dom";

function Header({ mobileMenu, setMobileMenu, page, setPage }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center px-[24px] md:px-[39px] py-[24px] mb-[48px] md:mb-[105px]  relative">
      <img
        className="cursor-pointer"
        src={logo}
        alt="logo"
        onClick={() => {
          navigate("/"), setMobileMenu(false), setPage("home");
        }}
      />
      <img
        src={hamburgeMenu}
        alt="menu"
        onClick={() => setMobileMenu(!mobileMenu)}
        className="md:hidden"
      />
      <div className="hidden md:flex md:font-barlow md:uppercase md:text-[#FFF] md:gap-[37px] md:px-[48px] md:py-[40px] md:bg-[#ffffff0a] md:absolute md:right-0 md:tracking-[2.3px] lg:gap-[50px] lg:pl-[123px] lg:pr-[167px]">
        <div className="flex flex-col">
          <span
            className="cursor-pointer"
            onClick={() => {
              navigate("/"), setPage("home");
            }}
          >
            home
          </span>
          {page == "home" ? (
            <span className="w-[36px] h-[3px] bg-[#FFF] absolute bottom-0"></span>
          ) : null}
        </div>
        <div className="flex flex-col items-center">
          <span
            className="cursor-pointer"
            onClick={() => {
              navigate("/destination"), setPage("destination");
            }}
          >
            destination
          </span>
          {page == "destination" ? (
            <span className="w-[87px] h-[3px] bg-[#FFF] absolute bottom-0"></span>
          ) : null}
        </div>
        <div className="flex flex-col items-center">
          <span
            className="cursor-pointer"
            onClick={() => {
              navigate("/crew"), setPage("crew");
            }}
          >
            crew
          </span>
          {page == "crew" ? (
            <span className="w-[36px] h-[3px] bg-[#FFF] absolute bottom-0"></span>
          ) : null}
        </div>
        <div className="flex flex-col">
          <span
            className="cursor-pointer"
            onClick={() => {
              navigate("/technology/launch-vehicle"), setPage("technology");
            }}
          >
            technology
          </span>
          {page == "technology" ? (
            <span className="w-[86px] h-[3px] bg-[#FFF] absolute bottom-0"></span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Header;
