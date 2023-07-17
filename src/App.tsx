import React from "react";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import GetQuote from "./components/GetQuote";
import Gallery from "./components/Gallery";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  // BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import GalleryIntro from "./components/GalleryIntro";
// import { getTokenFound } from "../src/firebase/firebaseconfig.js";

function App() {
  // const [tokenFound, setTokenFound] = useState(false);
  // getTokenFound(setTokenFound);
  // console.log(tokenFound, "TokenFound");

  return (
    <>
      {/* <RouterProvider router={routes} /> */}
      {/* <Router> */}
      <NavBar>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gallery" element={<GalleryIntro />} />
        </Routes>
      </NavBar>
      {/* </Router> */}
      {/* <GetQuote />
      <Gallery /> */}
    </>
  );
}
export default App;
