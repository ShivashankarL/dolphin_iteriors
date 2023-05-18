import { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
// import { getTokenFound } from "../src/firebase/firebaseconfig.js";

function App() {
  // const [tokenFound, setTokenFound] = useState(false);
  // getTokenFound(setTokenFound);
  // console.log(tokenFound, "TokenFound");
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
