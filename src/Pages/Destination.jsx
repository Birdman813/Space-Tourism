import React, { useEffect, useState } from "react";
import moonImg from "../assets/destination/image-moon.png";
import marsImg from "../assets/destination/image-mars.png";
import europaImg from "../assets/destination/image-europa.png";
import titanImg from "../assets/destination/image-titan.png";
import { useNavigate } from "react-router-dom";

function Destination({ setPage }) {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("moon");
  useEffect(() => {
    setPage("destination");
  }, []);
  return (
    <div className="flex flex-col items-center px-[24px] min-h-screen destination-container pb-[80px] md:px-[97px] lg:flex-row lg:justify-around">
      <div>
        <p className="text-[#FFF] font-barlow text-base uppercase tracking-[2.7px] mb-[32px] md:text-xl md:self-start md:mb-[60px]">
          <span className="opacity-25 mr-[10px]">01</span> Pick your destination
        </p>
        <img
          src={
            destination == "moon"
              ? moonImg
              : destination == "mars"
              ? marsImg
              : destination == "europa"
              ? europaImg
              : titanImg
          }
          alt="moon"
          className="w-[170px] mb-[27px] md:w-[300px] lg:w-[445px]"
        />
      </div>
      <div className="lg:flex lg:flex-col  lg:items-start">
        <div className="text-[#D0D6F9] font-barlow uppercase tracking-[2.3px] flex justify-center gap-[27px] mb-[32px] md:gap-[36px] lg:items-start">
          <div className="flex flex-col  items-center gap-[8px]">
            <span
              className="cursor-pointer"
              style={{ color: destination == "moon" ? "#FFF" : null }}
              onClick={() => setDestination("moon")}
            >
              Moon
            </span>
            {destination == "moon" ? (
              <span className="w-[36px] h-[3px] bg-[#FFF]"></span>
            ) : null}
          </div>
          <div className="flex flex-col  items-center gap-[8px]">
            <span
              className="cursor-pointer"
              style={{ color: destination == "mars" ? "#FFF" : null }}
              onClick={() => {
                {
                  setDestination("mars");
                }
              }}
            >
              Mars
            </span>
            {destination == "mars" ? (
              <span className="w-[36px] h-[3px] bg-[#FFF]"></span>
            ) : null}
          </div>
          <div className="flex flex-col  items-center gap-[8px]">
            <span
              className="cursor-pointer"
              style={{ color: destination == "europa" ? "#FFF" : null }}
              onClick={() => setDestination("europa")}
            >
              Europa
            </span>
            {destination == "europa" ? (
              <span className="w-[36px] h-[3px] bg-[#FFF]"></span>
            ) : null}
          </div>
          <div className="flex flex-col  items-center gap-[8px]">
            <span
              className="cursor-pointer"
              style={{ color: destination == "titan" ? "#FFF" : null }}
              onClick={() => setDestination("titan")}
            >
              Titan
            </span>
            {destination == "titan" ? (
              <span className="w-[36px] h-[3px] bg-[#FFF]"></span>
            ) : null}
          </div>
        </div>
        {destination == "moon" ? (
          <div>
            <div className="flex flex-col items-center mb-[32px] md:mb-[49px] lg:items-start">
              <h1 className="text-[#FFF] text-6xl font-bellefair md:text-[80px] lg:items-start">
                MOON
              </h1>
              <p className="text-[#D0D6F9] text-base text-center md:leading-[28px] lg:w-[444px] lg:text-start">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
            </div>
            <hr className="w-full mb-[32px]" />
            <div className="flex flex-col gap-[32px] uppercase md:flex-row md:justify-center lg:gap-[80px] lg:justify-start">
              <div className="flex flex-col items-center gap-[10px] lg:items-start">
                <span className=" text-[#D0D6F9] text-base font-barlow">
                  Avg.distance
                </span>
                <span className="text-[#FFF] text-3xl font-bellefair">
                  384,400 km
                </span>
              </div>
              <div className="flex flex-col items-center gap-[10px] lg:items-start">
                <span className="  text-[#D0D6F9] text-base text-barlow">
                  Est. travel time
                </span>
                <span className="text-[#FFF]  text-3xl font-bellefair">
                  3 days
                </span>
              </div>
            </div>
          </div>
        ) : destination == "mars" ? (
          <div>
            <div className="flex flex-col items-center mb-[32px] lg:items-start">
              <h1 className="text-[#FFF] text-6xl font-bellefair ">MARS</h1>
              <p className="text-[#D0D6F9] text-base text-center md:leading-[28px] lg:w-[444px] lg:text-start">
                Don’t forget to pack your hiking boots. You’ll need them to
                tackle Olympus Mons, the tallest planetary mountain in our solar
                system. It’s two and a half times the size of Everest!.
              </p>
            </div>
            <hr className="w-full mb-[32px]" />
            <div className="flex flex-col gap-[32px] uppercase  md:flex-row md:justify-center lg:gap-[80px] lg:justify-start">
              <div className="flex flex-col items-center gap-[10px] lg:items-start">
                <span className=" text-[#D0D6F9] text-base font-barlow">
                  Avg.distance
                </span>
                <span className="text-[#FFF] text-3xl font-bellefair">
                  225 MIL. km
                </span>
              </div>
              <div className="flex flex-col items-center gap-[10px] lg:items-start">
                <span className="  text-[#D0D6F9] text-base text-barlow">
                  Est. travel time
                </span>
                <span className="text-[#FFF]  text-3xl font-bellefair">
                  9 months
                </span>
              </div>
            </div>
          </div>
        ) : destination == "europa" ? (
          <div>
            <div className="flex flex-col items-center mb-[32px] lg:items-start">
              <h1 className="text-[#FFF] text-6xl font-bellefair">EUROPA</h1>
              <p className="text-[#D0D6F9] text-base text-center md:leading-[28px] lg:w-[444px] lg:text-start">
                The smallest of the four Galilean moons orbiting Jupiter, Europa
                is a winter lover’s dream. With an icy surface, it’s perfect for
                a bit of ice skating, curling, hockey, or simple relaxation in
                your snug wintery cabin.
              </p>
            </div>
            <hr className="w-full mb-[32px]" />
            <div className="flex flex-col gap-[32px] uppercase  md:flex-row md:justify-center lg:gap-[80px] lg:justify-start">
              <div className="flex flex-col items-center gap-[10px] lg:items-start">
                <span className=" text-[#D0D6F9] text-base font-barlow">
                  Avg.distance
                </span>
                <span className="text-[#FFF] text-3xl font-bellefair">
                  628 MIL. km
                </span>
              </div>
              <div className="flex flex-col items-center gap-[10px] lg:items-start">
                <span className="  text-[#D0D6F9] text-base text-barlow">
                  Est. travel time
                </span>
                <span className="text-[#FFF]  text-3xl font-bellefair">
                  3 years
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col items-center mb-[32px]  lg:items-start">
              <h1 className="text-[#FFF] text-6xl font-bellefair">TITAN</h1>
              <p className="text-[#D0D6F9] text-base text-center md:leading-[28px] lg:w-[444px] lg:text-start">
                The only moon known to have a dense atmosphere other than Earth,
                Titan is a home away from home (just a few hundred degrees
                colder!). As a bonus, you get striking views of the Rings of
                Saturn.
              </p>
            </div>
            <hr className="w-full mb-[32px]" />
            <div className="flex flex-col gap-[32px] uppercase  md:flex-row md:justify-center  lg:gap-[80px] lg:justify-start">
              <div className="flex flex-col items-center gap-[10px] lg:items-start">
                <span className=" text-[#D0D6F9] text-base font-barlow">
                  Avg.distance
                </span>
                <span className="text-[#FFF] text-3xl font-bellefair">
                  1.6 BIL. km
                </span>
              </div>
              <div className="flex flex-col items-center gap-[10px]  lg:items-start">
                <span className="  text-[#D0D6F9] text-base text-barlow">
                  Est. travel time
                </span>
                <span className="text-[#FFF]  text-3xl font-bellefair">
                  7 years
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Destination;
