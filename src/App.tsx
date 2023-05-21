import "./App.css";
import React from "react";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import GetQuote from "./components/GetQuote";
// import { getTokenFound } from "../src/firebase/firebaseconfig.js";

function App() {
  // const [tokenFound, setTokenFound] = useState(false);
  // getTokenFound(setTokenFound);
  // console.log(tokenFound, "TokenFound");
  return (
    <>
      <NavBar />
      <LandingPage />
      <GetQuote />
    </>
  );
}
export default App;
