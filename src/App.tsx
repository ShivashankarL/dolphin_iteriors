import React from "react";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import GetQuote from "./components/GetQuote";
import Gallery from "./components/Gallery";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { getTokenFound } from "../src/firebase/firebaseconfig.js";

function App() {
  // const [tokenFound, setTokenFound] = useState(false);
  // getTokenFound(setTokenFound);
  // console.log(tokenFound, "TokenFound");
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <NavBar>
          <LandingPage />
        </NavBar>
      ),
    },
    {
      path: "/gallery",
      element: (
        <NavBar>
          <Gallery />
        </NavBar>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
      {/* <GetQuote />
      <Gallery /> */}
    </>
  );
}
export default App;
