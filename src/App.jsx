import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import MobileMenu from "./Components/MobileMenu";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew/Crew";
import MarkCrew from "./Pages/Crew/MarkCrew";
import VictorCrew from "./Pages/Crew/VictorCrew";
import AnsariCrew from "./Pages/Crew/AnsariCrew";
import LaunchVehicle from "./Pages/Technology/LaunchVehicle";
import Spaceport from "./Pages/Technology/Spaceport";
import SpaceCapsule from "./Pages/Technology/SpaceCapsule";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [page, setPage] = useState("home");
  return (
    <div
      className={`body-container min-h-screen relative ${
        page === "home" ? "bg-home-mobile" : ""
      }
      ${page === "destination" ? "bg-destination-mobile" : ""}
      ${page === "crew" ? "bg-crew-mobile" : ""}
      ${page === "technology" ? "bg-technology-mobile" : ""}
    }`}
    >
      <Header
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        page={page}
        setPage={setPage}
      />
      <Routes>
        <Route path="/" element={<Home setPage={setPage} />} />
        <Route
          path="/destination"
          element={<Destination setPage={setPage} />}
        />
        <Route path="/crew" element={<Crew setPage={setPage} />} />
        <Route
          path="/crew/:mark-shuttleworth"
          element={<MarkCrew setPage={setPage} />}
        />
        <Route
          path="/crew/victor-glover"
          element={<VictorCrew setPage={setPage} />}
        />
        <Route
          path="/crew/anousheh-ansari"
          element={<AnsariCrew setPage={setPage} />}
        />
        <Route
          path="/technology/launch-vehicle"
          element={<LaunchVehicle setPage={setPage} />}
        />
        <Route
          path="/technology/spaceport"
          element={<Spaceport setPage={setPage} />}
        />
        <Route
          path="/technology/space-capsule"
          element={<SpaceCapsule setPage={setPage} />}
        />
      </Routes>
      {mobileMenu ? (
        <MobileMenu
          setMobileMenu={setMobileMenu}
          page={page}
          setPage={setPage}
        />
      ) : null}
    </div>
  );
}

export default App;
