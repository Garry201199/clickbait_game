import "./App.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-circular-progressbar/dist/styles.css";
import NavBar from "../src/Comp/NavBar";
import PlayGround from "./Pages/PlayGround";
import ProtectedRoutes from "./Comp/ProtectedRoute";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import LeaderBoard from "./Pages/LeaderBoard";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="playground" element={<PlayGround />} />
        </Route>
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
    </>
  );
}

export default App;
